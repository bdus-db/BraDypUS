/**
 * @author			Julian Bogdani <jbogdani@gmail.com>
 * @copyright		BraDypUS, Julian Bogdani <jbogdani@gmail.com>
 * @license			See file LICENSE distributed with this code
 */

var saved_queries = {
		init: function(id){
			if (!id){
				saved_queries.showAll();
			} else {
				core.getJSON('saved_queries_ctrl', 'getById', {"id": id}, false, function(data){
					if (data.status == 'success'){
						api.showResults(data.tb, 'type=obj_encoded&obj_encoded=' + data.obj_encoded, core.tr('saved_queries') + ' (' + data.tb + ')');
					} else {
						core.message(core.tr('saved_query_does_not_exist', id), 'error', true);
					}
				});
			}
		},
		showAll: function(){
		
			$.get('./?obj=saved_queries_ctrl&method=showAll', function(data){
				
				if (!data || data == ''){
					core.message(core.tr('no_saved_queries'));
					return
				}
				
				core.open({
					html: data,
					title: core.tr('saved_queries')
				});
			
				$('td.buttons a').click(function(){
			
					var $this = $(this);
					
					switch($this.data('action')){
					
						case 'share':
							$.get('./?obj=saved_queries_ctrl&method=shareQuery&id=' + $this.data('id'), function(data){
								core.message(data.text, data.status);
								if (data.status === 'success'){
									$this
										.data('action', 'unshare')
										.html(core.tr('unshare'));
									}
							}, 'json');
							break;
			
						case 'unshare':
							$.get('./?obj=saved_queries_ctrl&method=unShareQuery&id=' + $this.data('id'), function(data){
								core.message(data.text, data.status);
								if (data.status === 'success'){
									$this
										.data('action', 'share')
										.html(core.tr('share'));
									}
									
							}, 'json');
							
							break;
			
						case 'erase':
							$.get('./?obj=saved_queries_ctrl&method=deleteQuery&id=' + $this.data('id'), function(data){
								core.message(data.text, data.status);
								if (data.status == 'success'){
									$this
										.parents('tr')
										.remove();
									}
							}, 'json');
							break;
			
						case 'execute':
							api.showResults($this.data('tb'), 'type=obj_encoded&obj_encoded=' + $this.data('text'), core.tr('saved_queries') + ' (' + $this.data('tb') + ')');
							break;
					}
					return false;
					});
			});
		}
};