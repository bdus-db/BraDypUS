var sync = {
	init: function(){
		core.open({
			obj: 'sync_ctrl',
			method: 'mainUI',
			title: core.tr('sync')
		});
	},
		
	getStatus: function(button){
		button.html(core.tr('<img src="img/loading.gif" alt="loading..." />'));
		
		core.getJSON('sync_ctrl', 'getStatus', false, false, function(data){
			if (data.status == 'error'){
				core.message(data.text, data.status);
			} else {
				if (data.app_status == 'frozen'){
					button.html('<i class="icon-lock"></i> ' + core.tr('app_locked_click_to_unlock'));
				} else {
					button.html('<i class="icon-unlock"></i> ' + core.tr('app_unlocked_click_to_lock'));
				}
				
				button.off('click').on('click', function(){
					sync.toggleStatus(button, data.file);
				});
			}
		});
	},
	
	toggleStatus: function(button, file){
		button.html(core.tr('<img src="img/loading.gif" alt="loading..." />'));
		
		core.getJSON('sync_ctrl', 'toggleStatus', {tmpfile: file}, false, function(data){
			if (data.status == 'error'){
				core.message(data.text, data.status);
			} else {
				if (data.app_status == 'frozen'){
					button.html('<i class="icon-lock"></i> ' + core.tr('app_locked_click_to_unlock'));
				} else {
					button.html('<i class="icon-unlock"></i> ' + core.tr('app_unlocked_click_to_lock'));
				}
			}
		});
	}
};