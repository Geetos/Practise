//树 的配置，具体请看:http://www.treejs.cn/v3/main.php#_zTreeInfo
var setting = {
	check: {
		enable: true
	},
	data: {
		simpleData: {
			enable: true,
			idKey: "id",
			pIdKey: "pId",
			rootPId: 0
		}
	}
};

//树 对象
function menuTree(id,pId,name,checked){
	this.id=id;
	this.pId=pId;
	this.name=name;
	this.checked=checked;
}

//权限处理
function roleMenu(rid,qx,title){
	var zNodes =[];
	reloadQXModal(rid,qx,title);
	$.ajax({
		type:"POST",
		url:_ctx+"/role/qx",
		cache:false,
		data:{time:new Date().getTime(),qx:qx,role_id:rid},
		dataType:"json",
		success:function(data){
			if(data.status == 'success'){
				var rultData = data.data;
				for(var i=0;i<rultData.length;i++){
					var childNode = [];
					var obj = rultData[i];
					zNodes.push(new menuTree(obj.menu_ID,obj.parent_ID,obj.menu_NAME,obj.hasMenu));
					if(obj.subMenu.length > 0){
						for(var j = 0;j<obj.subMenu.length;j++){
							var subm = obj.subMenu[j];
							zNodes.push(new menuTree(subm.menu_ID,subm.parent_ID,subm.menu_NAME,subm.hasMenu));
						}
					}
				}
				//初始化 数
				$.fn.zTree.init($("#roleTree"), setting,zNodes);
			}else{
				alert(data.msg);
			}
		}
	});
	$("#qxModal").modal("show");
}

//删除按钮
function delRole(role_id){
	if(confirm("你确定要删除吗？如果删除，拥有该角色的用户将失去此角色的权限。")){
		$.ajax({
			type:"GET",
			url:_ctx+"/role/del/"+role_id,
			cache:false,
			dataType:"json",
			data:{time:new Date().getTime()},
			success:function(data){
				if(data.status == 'success'){
					window.location.href=window.location.href;
				}else{
					alert(data.msg);
				}
			}
		});
	}
}

//编辑角色信息
function editRole(roleId,role_name,role_desc){
	reloadRoleModal(roleId,_ctx+"/role/edit",role_name,role_desc,"编辑角色","更改");
	$("#roleModal").modal("show");
}

//修改模态框的数据
function reloadQXModal(roleId,qx,title){
	$("input[name='qx']").val(qx);
	$("input[name='role_id']").val(roleId);
	$("#modelHead").text(title);
}
function reloadRoleModal(roleId,url,role_name,role_desc,title,btnText){
	$("input[name='url']").val(url);
	$("input[name='role_id']").val(roleId);
	$("input[name='role_name']").val(role_name);
	$("textarea[name='role_desc']").val(role_desc);
	$("#rolemodelHead").text(title);
	$("#submit-roleBtn").text(btnText);
}

//更改权限
function updateRole(rid,ids,qx){
	$.ajax({
		type:"POST",
		url:_ctx+"/role/edit",
		cache:false,
		dataType:"json",
		data:{role_id:rid,ids:ids,qx:qx},
		success:function(data){
			if(data.status == 'success'){
				$("#qxModal").modal("hide");
			}else{
				alert(data.msg);
			}
		}
	});
}

$(function(){
	 //提示框
    $("[data-toggle='tooltip']").tooltip();
	//表格分页
    $('#roleList').DataTable({
  		'paging'      : true,
  	    'lengthChange': true,
  	    'searching'   : true,
  	    'ordering'    : true,
  	    'info'        : true,
  	    'autoWidth'   : false,
  	  	"scrollX"	  : true,
  	  	"pagingType"  : "full_numbers",
  	  	"pageLength"  : 10
    });
	
	//点击模态框更改按钮
	$("#submit-qxBtn").click(function(){
		var treeObj = $.fn.zTree.getZTreeObj("roleTree");
		var nodes = treeObj.getCheckedNodes(true);
		var ids = "";
		for(var i=0;i<nodes.length;i++){
			var node = nodes[i];
			if(i != nodes.length -1){
				ids =ids+node.id+",";
			}else{
				ids = ids +node.id;
			}
		}
		var roleId = $("input[name='role_id']").val();
		var qx = $("input[name='qx']").val();
		updateRole(roleId,ids,qx)
	});
	
	$("#addRole").click(function(){
		reloadRoleModal("",_ctx+"/role/add","","","新增角色","新增");
		$("#roleModal").modal("show");
	});
	
	//角色模态框的提交按钮
	$("#submit-roleBtn").click(function(){
		var url = $("input[name='url']").val();
		var roleId = $("input[name='role_id']").val();
		var roleName = $("input[name='role_name']").val();
		//回车或换行再次编辑的时候出现问题，怀疑是editRole方法的单引号问题。双引号转义老失败,
		var roleDesc = $("textarea[name='role_desc']").val().replace(/\n/g,"、").replace(/\s/g,"、");
		$.ajax({
			type:"POST",
			cache:false,
			url:url,
			dataType:"json",
			data:{role_id:roleId,role_name:roleName,role_desc:roleDesc,time:new Date().getTime()},
			success:function(data){
				if(data.status == 'success'){
					window.location.href=window.location.href;
					$("#roloModal").modal("hide");
				}else{
					alert(data.msg);
				}
			}
		});
	});
})

//分配人员
function allotRole(uId,id){
    $(".modal-body .cbp p").remove();
    $.ajax({
        type:"GET",
        url:_ctx+"/usercontrol/findAll",
        dataType:"json",
        data:{time:new Date().getTime()},
        cache:false,
        success:function(data){
            if(data.status == 'success'){
                var str = "<p><input type='hidden' name='roId' value='"+id+"'/>";
                var arr = data.data;
                for(var i =0;i<arr.length;i++){
                    var rolestr = "";
                    if(uId !=null){
                        if(arr[i].id == uId) {
                            rolestr = "<p><input type='radio' name='usercontrol_id' id='id" + (i + 1) + "' value='" + arr[i].id + "' class='chk_1' checked />";
                        }else{
                            rolestr="<p><input type='radio' name='usercontrol_id' id='id"+(i+1)+"' value='"+arr[i].id+"' class='chk_1'/>";
                        }
                    }else{
                        rolestr="<p><input type='checkbox' name='usercontrol_id' id='id"+(i+1)+"' value='"+arr[i].id+"' class='chk_1'/>";
                    }
                    rolestr = rolestr +"<label for='id"+(i+1)+"'></label><label data-toggle='tooltip'  data-placement='right' class='font'>"+arr[i].controlName+"</label></p>";
                    str = str + rolestr;
                }
                $(".modal-body .cbp").append(str);
                //这是为了让title 属性生效
                $.getScript("/js/tip.js");
                $("#edituserRoleModal").modal("show");
            }else{
                alert(data.msg);
            }
        }
    });
}

$("#roleSubmit").click(function(){
    var ids="";
    $("input[name='usercontrol_id']:checked").each(function(){
        ids = $(this).val();
    });
    var role_id = $("input[name='roId']").val();
    $.ajax({
        type:"POST",
        url:_ctx+"/role/editusercontrol",
        cache:false,
        //dataType:"json",
        //contentType:"application/json",
        data:{usercontrol_id:ids,role_id:role_id,time:new Date().getTime()},
        success:function(data){
            if(data.status == 'success'){
                window.location.href= window.location.href;
            }else{
                alert(data.msg);
            }
        }
    });
});
