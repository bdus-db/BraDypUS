/**
 * @author			Julian Bogdani <jbogdani@gmail.com>
 * @copyright		BraDypUS, Julian Bogdani <jbogdani@gmail.com>
 * @license			See file LICENSE distributed with this code
 */

var vocabularies = {
		init: function(){

			core.open({
				obj: 'vocabularies_ctrl',
				method: 'show',
				title: core.tr('vocabulary_mng')
			});
		},

		edit: function(id, text, success){
			var html = $('<input />').val(text).attr('type', 'text');
			core.open({
				title: core.tr('edit_def'),
				html: html,
				buttons:[
				         {
				        	 text: core.tr('save'),
				        	 click: function(){
				        		 var val = $('#modal input').val();
				        		 $.get('controller.php?obj=vocabularies_ctrl&method=edit&id=' + id + '&val=' + val, function(data){
							         core.message(data.text, data.status);
							         if (data.status == 'success'){
							        	 if (success){
							        		 success(val);
							        	 }
								     }

				        		 }, 'json');
				        		 $('#modal').modal('hide');
				        	 }
				         },
				         {
				        	 text: core.tr('close'),
				        	 action: 'close'
				         }
				         ]
			}, 'modal');
		},

		erase: function(id, success){
			core.open({
				title: core.tr('attention'),
				html: '<h3 class="text-error">' + core.tr('confirm_delete_def') + '</h3>',
				buttons:[
				        {
				        	text: core.tr('erase'),
				        	click: function(){
				        		 $.get('controller.php?obj=vocabularies_ctrl&method=erase&id=' + id, function(data){
							         core.message(data.text, data.status);
							         if (data.status == 'success'){
							        	 if (success){
							        		 success();
							        	 }
								     }
					        	 }, 'json');

				        		 $('#modal').modal('hide');
				        	}
				        },
				        {
				        	 text: core.tr('close'),
				        	 action: 'close'
				         }
				        ]
			}, 'modal');
		},

		/**
		 * Adds a new voc, closes dialog and reopens it (updated)
		 * @param dialog
		 */
		add_new: function(voc, success){
			core.open({
				title: core.tr( voc ? 'new_def' : 'new_voc'),
				obj: 'vocabularies_ctrl',
				method: 'add_new_form',
				param: [voc],
				buttons:[
				         {
				        	text: core.tr('add'),
				        	click: function(){
				        		var myvoc = $('#voc').val(), mydef = $('#def').val();
				        		 if (!myvoc || !mydef){
				        			 core.message(core.tr('voc_def_required'), 'error');
				        		 }
				        		 else
				        		 {
				        			 $.get('controller.php?obj=vocabularies_ctrl&method=add&voc=' + myvoc + '&def=' + mydef, function(data){
				        				 if (data.status == 'success'){
				        					 $('#def').val('');
				        					 if (success){
				        						 success();
				        					 }
				        				 }
				        				 core.message(data.text, data.status);
				        			 }, 'json');
				        		 }
				        	}
				         },
				         {
				        	 text: core.tr('close'),
				        	 action: 'close'
				         }
				         ]
			}, 'modal');
		}
};
