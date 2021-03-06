/**
 * @author			Julian Bogdani <jbogdani@gmail.com>
 * @copyright		BraDypUS, Julian Bogdani <jbogdani@gmail.com>
 * @license			See file LICENSE distributed with this code
 */

var translate = {
		init: function(){
			
			core.open({
				obj: 'translate_ctrl',
				method: 'showList',
				title: core.tr('system_translate')
			});
		},

		showForm: (lang, where) => {
			$(where).html(core.loading).load(`./?obj=translate_ctrl&method=showForm&lang=${lang}`)
		},
		
		addLang: function(id){
			core.open({
				html: $('<input />').attr({type:'text', maxlength:2}).addClass('newLang').addClass('form-control'),
				title: core.tr('new_lang_code_two_digits'),
				buttons: [{
					text: core.tr('save'),
					click: function(){
						var lang = $('#modal').find('input.newLang').val();
						if(!lang || lang.length !== 2){
							core.message(core.tr('lang_lenth_must_be_two'), 'error');
						} else {
							$('#modal').modal('hide');
							core.getJSON('translate_ctrl', 'newLang', {"lang": lang}, false, function(data){
								core.message(data.text, data.status);
								if (data.status == 'success'){
									layout.tabs.reloadActive();
								}
							});
						}
					}
				},
				{
					text: core.tr('close'),
					action: 'close'
				}]
			}, 'modal');
		},
		saveData: (lang, formData, loaded) => {
			core.getJSON('translate_ctrl', 'saveData', {'lang':lang}, formData, function(resp){
				core.message(resp.text, resp.status);
				loaded();
			});
		}
};

