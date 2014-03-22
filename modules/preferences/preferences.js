var preferences = {
		init: function(){
			core.open({
				obj: 'preferences_ctrl',
				method: 'open',
				title: core.tr('user_preferences')
			});
		},
		
		save2db: function(){
			core.getJSON('preferences_ctrl', 'save2db', false, false, function(data){
				core.message(data.text, data.status);
			});
		}
};