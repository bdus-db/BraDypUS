/**
* @author			Julian Bogdani <jbogdani@gmail.com>
* @copyright		BraDypUS, Julian Bogdani <jbogdani@gmail.com>
* @license			See file LICENSE distributed with this code
*/

var layout = {
    
    init: function(){
        
        $('<div />').attr('id', 'wrapper').appendTo('body');
        
        $(window).on('resize', function(){
            layout.setSize();
        });
        
        $(window).on( 'hashchange', function(e) {
            hashActions.map2action();
        });
    },
    
    loadHome: function(){
        
        var html = '<div class="tabbable">' +
        '<ul class="nav nav-tabs navbar-fixed-top" id="tabs" data-tabs="tabs">' +
        '<li class="active"><a href="#home">BraDypUS v3</a></li>' +
        '</ul>' +
        '<div class="tab-content">' +
        '<div class="tab-pane active" id="home"></div>' +
        '</div>' +
        '</div>';
        
        $('#wrapper').html(html);
        
        $('<button id="tabs_toggle" type="button" class="btn btn-primary" style="z-index:9999; position:fixed;top:0; right:0">' +
        '<i class="fa fa-reorder"></span>' +
        '</button>')
        .appendTo($('#wrapper'))
        .on('click', function(){
            $('#tabs').toggle();
        });
        
        $.get('./?obj=home_ctrl&method=main_home', function(data){
            $('#home').html(data);
        }, 'html');
        
        $(document).on('keyup', 'input.fast_search', function(e){
            var code = (e.keyCode ? e.keyCode : e.which);
            if (code == 13){
                core.runMod('search', ['fast', $('#ref_tb').val(), $(this).val()]);
            }
        });
        
        $(document).on('keyup', 'input#find-fn', function(e){
            var srch = $(this).val().toLowerCase();
            
            if (!srch || srch === ''){
                $('ul.searcheable-list li').each(function(i, el){
                    $(el).removeClass('highlight');
                });
                return;
            }
            
            $('ul.searcheable-list li').each(function(i, el){
                var txt = $(el).text().toLowerCase();
                if (txt.indexOf(srch) !== -1){
                    $(el).addClass('highlight');
                } else {
                    $(el).removeClass('highlight');
                }
            });
        });
        
        layout.tabs.start('#tabs');
        
        
        $('<div />')
            .attr('id', 'waiting_main')
            .appendTo($('#wrapper'))
            .hide()
            .on('click', function(){
                $(this).hide();
            });
        
        $(document).ajaxStart(function(){
            $('#waiting_main').show();
        });
        
        $(document).ajaxStop(function(){
            $('#waiting_main').hide();
        });
        
        $(document).ajaxError(function(event, request, settings){
            if (request.statusText === 'abort' || settings.suppressErrors){
                return;
            }
            $('#waiting_main').hide();
            core.message(core.tr('error_in_module', [settings.url]), 'error', true);
        });
        
        layout.setSize();
    },
    
    
    dialog: {
        
        add: function(opts){
            if ($('#modal').length > 0){
                layout.dialog.close($('#modal'));
            }
            
            var dialog =  $('<div />')
                .attr('id', 'modal')
                .addClass('modal fade')
                .append('<div class="modal-dialog">' +
                    '<div class="modal-content">' +
                    (opts.title ? '<div class="modal-header"><h4>' + opts. title + '</h4></div>' : '') +
                    '</div>' +
                    '</div>'
                ).appendTo('body');
                
            if (opts.width){
                dialog.css({
                    width:opts.width,
                    'margin-left':'-' + (opts.width/2) + 'px'
                });
            }
                
            var body = $('<div />').addClass('modal-body').appendTo(dialog.find('div.modal-content')),
            URLstring = './?';
            
            
            if (opts.html){
                body.html(opts.html);
                
                if (opts.loaded){
                    opts.loaded(body);
                }
                
            } else if (opts.obj && opts.method){
                
                URLstring += 'obj=' + opts.obj + '&method=' + opts.method;
                
                if (opts.param){
                    if (typeof opts.param === 'string'){
                        URLstring += '&' + opts.param;
                    } else if($.isPlainObject(opts.param))  {
                        URLstring += '&' + $.param(opts.param);
                    } else if ($.isArray(opts.param)){
                        URLstring += '&param[]=' + opts.param.join('&param[]=');
                    }
                }
                body.load(URLstring, opts.post, opts.loaded);
                
            } else {
                return false;
            }
            
            if (opts.buttons && typeof opts.buttons == 'object'){
                
                var footer = $('<div />').addClass('modal-footer').appendTo(dialog.find('div.modal-content'));
                
                $.each(opts.buttons, function(index, but){
                    var a = $('<a />').addClass('btn'+ (but.addclass ? ' ' + but.addclass : ' btn-primary')).html(but.text);
                    
                    if (but.href){
                        a.attr('href', but.href);
                    }
                    
                    if (but.click){
                        if (but.click == 'close'){
                            a.attr('data-dismiss', 'modal');
                        } else{
                            a.click(function(){ but.click(dialog); });
                        }
                    }
                    
                    if (but.action == 'close'){
                        a.attr('data-dismiss', 'modal');
                    }
                    
                    a.appendTo(footer);
                });
            }
            
            dialog.modal({'keyboard':true});
            
            dialog.on('hidden.bs.modal', function(){
                $('body').removeClass('modal-open');
                dialog.remove();
            });
        },

        close: function(dialog){
            if (dialog){
                dialog.modal('hide');
            } else {
                $('#modal').modal('hide');
            }
        }
    },
        
    tabs : {
        tab: '',
        
        start: function(el){
            if (typeof el == 'string'){
                this.tab = tab = $(el);
            } else {
                this.tab = tab = el;
            }
            tab.find('a').click(function (e) {
                e.preventDefault();
                $(this).tab('show');
            });
            
            tab.find('button.close').click(function(e){
                var li = $(this).parents('li');
                layout.tabs.close(li);
                return false;
            });
        },
        
        /**
        * 1:
        * 	opts.obj		string
        * 	opts.method		string
        * 	opts.param (?)	string | array | plain object
        *
        * 2:
        * 	opts.mod		string
        * 	opts.get (?)	obj
        * 3:
        * 	opts.html		mixed (html)
        *
        * 1 + 2 + 3 (?)
        * 	opts.title (?)	string
        * 	opts.post (?)	obj
        * 	opts.loaded(?)	function
        * 	opts.unique	boolean
        *
        * @param opts
        */
        add: function(opts){
            
            var title = opts.title ? opts.title : '',
            tab = this.tab,
            id = Math.floor(Math.random()*1000) + '' + tab.find('li').length,
            URLstring = './?';
            
            this.tab.append('<li><a href="#added' + id + '">' + title + ' <button class="close" type="button">×</button></a></li>');
            this.tab.next('div.tab-content').append('<div class="tab-pane" id="added' + id + '">' + core.loading + '</div>');
            this.tab.find('li a:last').tab('show');
            this.start(tab);
            
            this.optsToTabContent(opts, $('#added' + id));
        },
        
        closeActive: function(){
            var active = tab.find('li.active');
            layout.tabs.close(active);
        },
        
        reloadActive: function(){
            var d_active = $('div.tab-content div.active'),
            opts = tab.find('li.active').data('state');
            
            this.optsToTabContent(opts, d_active);
        },
        
        close: function(li){
            $('#' + li.find('a').attr('href').replace('#', '')).remove();
            li.remove();
            if (li.hasClass('active')){
                tab.find('li a:last').tab('show');
            }
        },

        /**
         * Parses opts object and loads content in element
         * @param Object opts Object with opts
         * @param Object element element where to load data
         */
        optsToTabContent: function(opts, element){
            element.html('<img src="./img/arrows-loader.gif" alt="loading..." />');
            
            var URLstring = './?';
            
            if (opts.html){
                element.html(opts.html);
                if (opts.loaded){
                    opts.loaded(element);
                }
                
            } else if (opts.obj && opts.method){
                
                URLstring += 'obj=' + opts.obj + '&method=' + opts.method;
                
                if (opts.param){
                    if (typeof opts.param === 'string'){
                        URLstring += '&' + opts.param;
                    } else if($.isPlainObject(opts.param))  {
                        URLstring += '&' + $.param(opts.param);
                    } else if ($.isArray){
                        URLstring += '&param[]=' + opts.param.join('&param[]=');
                    }
                }
                
                $.ajax({
                    'type': opts.post ? 'POST' : 'GET',
                    'url': URLstring,
                    'data': opts.post
                })
                .done(function(data){
                    element.html(data);
                    if (opts.loaded){
                        opts.loaded(element);
                    }
                });
                
                this.tab.find('li.active').data('state', opts);
                
            } else {
                return false;
            }
        }

    },

    setSize : function(){
        //does nothing
        if ($(window).width() < 768){
            $('#tabs').hide();
            $('#tabs_toggle').show();
        } else {
            $('#tabs').show();
            $('#tabs_toggle').hide();
        }
    }
};