/**
* @author			Julian Bogdani <jbogdani@gmail.com>
* @copyright		BraDypUS, Julian Bogdani <jbogdani@gmail.com>
* @license			See file LICENSE distributed with this code
 */

var search = {
		init: function(method, tb, fast_string){

			switch(method){
				case 'advanced':
					search.advanced(tb);
					break;

				case 'sqlExpert':
					search.sqlExpert(tb);
					break;

				case 'all':
					search.all(tb);
					break;

				case 'fast':
					search.fast(fast_string, tb);
					break;
			}
		},

		fast: function(string, tb){
			api.showResults(tb, 'type=fast&string=' + encodeURI(string), core.tr('fast_search'));
		},


		all: function(tb){

			api.showResults(tb, 'type=all', core.tr('show_all') + ' (' + tb + ')');
		},

		advanced: function(tb){
			core.open({
				obj: 'search_ctrl',
				method: 'advancedGUI',
				param: {tb: tb},
				title: core.tr('advanced_search') + ' (' + tb + ')',
			});
		},

		sqlExpert: function(tb){
			core.open({
				obj: 'search_ctrl',
				method: 'expertGUI',
				param: {tb: tb},
				title: core.tr('sql_expert_search') + ' (' + tb + ')'
			});
		},


		test: function(type, tb, post_data){
			post_data += '&tb=' + tb + '&type=' + type;
			core.getJSON('search_ctrl', 'test', false, post_data, function(data){
				core.message(data.verbose, data.status);
			});
		},

		getValues: function(fieldset, destroy){

			var fld = fieldset.find('select.fld'),
			input = fieldset.find('input.value');

			var name = input.attr('name');
			var select = $('<select>').attr('name', name).attr('data-tags', 'true').addClass('value').addClass('form-control');
			input.replaceWith(select);

			if (destroy == 'destroy'){
				select.attr('id', false);
				select.next('datalist').remove();
				enhance.combobox(select, true);
				return;
			}

			var datalist = $('<datalist />'),
			uid = 'uid' + Date.now();
			if (fld.val()){
				core.getJSON('search_ctrl', 'getUsedValues', {
					tb: fld.val().split(':')[0], 
					fld:fld.val().split(':')[1]
				}, false, function(data){
					$.each(data, function(i, val){
						datalist.append('<option>' + val + '</option>');
					});

					datalist.insertAfter(select)

					select.attr('id', uid);
					select.css('width', '100%');
					datalist.attr('for', uid);

					enhance.combobox(select);

				});
			}
		}
};
