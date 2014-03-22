var chart = {
		init: function(tb, query){
			
			if (tb == 'showChart' && query){
				chart.showChartById(query);
			} else if (tb){
				chart.showBuilder(tb, query);
			} else {
				chart.showSaved();
			}
		},
		
		editChartGUI: function(id){
			
			core.open({
				'obj': 'chart_ctrl',
				'method': 'edit_form',
				'param': {id: id},
				'title': core.tr('edit_chart')
			});
		},
		
		editChart: function(id, name, text){
			core.getJSON('chart_ctrl', 'update', false, {'id':id, 'name':name, 'text':text}, function(data){
				core.message(data.text, data.status);
			});
		},
		
		buildFromParams: function(form_data){
			core.open({
				 obj: 'chart_ctrl',
				 method: 'processdata',
				 title: core.tr('chart'),
				 post: form_data
			 });
		},
		
		/**
		 * Opens tab with table containing liost of all saved charts
		 */
		showSaved: function(){
			core.open({
				obj: 'chart_ctrl',
				method: 'show_all',
				title: core.tr('saved_charts')
			});
		},
		
		
		showChartById: function(id){
			core.open({
				obj: 'chart_ctrl',
				method: 'display_chart',
				title: core.tr('chart'),
				param: {id: id}
			});
		},
		
		
		saveAs: function(query_text){
			core.open({
				html: $('<div />').append(
						$('<label />').text(core.tr('chart_name')),
						$('<br />'),
						$('<input />').addClass('chart_name')
						),
				title: core.tr('save_chart_as'),
				buttons:[
				         {
				        	 text: core.tr('save'),
				        	 click: function(){
				        		 core.getJSON('chart_ctrl', 'saveAs', false, {query_text:query_text, name:$('#modal input.chart_name').val()}, function(data){
				        			 core.message(data.text, data.status);
				        			 if (data.status == 'success'){
				        				 $('#modal').modal('close');
				        			 }
				        		 });
				        	 }
				         },
				         {
				        	 text: core.tr('cancel'),
				        	 action: 'close'
				         }
				         ]
			}, 'modal');
		},
		
		showBuilder: function(tb, query){
			core.open({
				title: core.tr('build_chart'),
				obj: 'chart_ctrl',
				method: 'showBuilder',
				param: {tb: tb, query: query}
			});
			
		}
};