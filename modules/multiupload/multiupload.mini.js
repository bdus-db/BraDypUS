/*
 * copyright BraDypUS 
 * Created: 1436103229.3496
*/
var multiupload={init:function(){core.open({obj:'multiupload_ctrl',method:'loadFiles',title:core.tr('multiupload'),loaded:function(el){api.fileUpload(el.find('a.elUpload'),'./controller.php?obj=multiupload_ctrl&method=saveUploads&upload_dir='+new Date().getTime(),{'complete':function(id,fileName,resp){el.find('input.dir').val(resp.uploadDir);}});}});},showApproveGUI:function(tmpDir,div){if(!tmpDir){core.message(core.tr('load_file_to_proceed'),'error');}else{div.load('controller.php?obj=multiupload_ctrl&method=showPreview&dir='+tmpDir);}},saveFiles:function(form){$.post('./controller.php?obj=multiupload_ctrl&method=save',form.serialize(),function(data){core.message(data.text,data.status);if(data.status=='success'){layout.tabs.closeActive();}else{console.log(data.data);}},'json');},add_links:function(btn){api.link.add_ui(function(tb,id_arr,$this){btn.parents('tr').find('td.tb-link').html('<input type="text" name="f['+btn.data('x')+'][tb]" value="'+tb+'" />');btn.parents('tr').find('td.id-link').html('');$.each(id_arr,function(i,id){btn.parents('tr').find('td.id-link').append('<input type="text" style="width:25px" name="f['+btn.data('x')+'][id][]" value="'+id+'"/>');});});}};