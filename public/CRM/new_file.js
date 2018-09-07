window.onload=function(){
	

	var list=document.getElementById("list")
//		$.ajax({
//			type:"get",
//			data:{teg:1,tem:2},
//			url:"http://localhost:8005/item/list",
//			async:true,
//			success:function(data){
//
//				
//			},
//			error:function(){
//				
//			}
//		});
		var curPage = 1; //当前页码
    	var total,pageSize,totalPage;
	
        	getData(1)
     
}
		function fn(page){
            if(page){
                getData(page);
            }
        }


		function getData(page){	
			$.ajax({
				url: "http://localhost:8005/item/page",
				data: {'pageNum':page},
				type: "get",
			//	dataType:'json',
				success: function(data) {
						
						total = data.total; //总记录数
	                    pageSize = data.pageSize; //每页显示条数
	                    curPage = page; //当前页
	                    totalPage = data.totalPage; //总页数
	                    list.innerHTML='';
	                    var data=data.list
						for(var i=0;i<data.length;i++){
							
							var oLi=document.createElement('li')
							oLi.innerHTML='<span>'+data[i].user_name+'</span><span>'+data[i].user_sex+'</span><span>'+data[i].user_age+'</span><span>'+data[i].user_tel+'</span><span>'+data[i].user_post+'</span></span><a href="javascript:;" class="chakan" b="'+data[i].user_id+'">查看</a><a href="javascript:;" class="xiugai" a="'+data[i].user_id+'">修改</a><a href="javascript:;" class="delete" id="'+data[i].user_id+'">删除</a></span>'
							list.appendChild(oLi)
						}
						$('.delete').click(function(){
						var user_id=$(this).attr('id');
//						alert(user_id)
						var dr=$(this).parents('li');
						$.ajax({
							type:"get",
							url:"http://localhost:8005/item/del",
							data:{user_id:user_id},
							async:true,
							success:function(data){
								if(data.flag==1){
									alert('删除成功')
											dr.remove()
								}
								$.ajax({
									type:"get",
									url:"http://localhost:8005/item/list",
									data:{teg:1,tem:2},
									async:true,
									success:function(data){
										if(data.flag==1){
											getData(1)
										}
		//								window.location.reload()
									}
								});
//								window.location.reload()
							}
						});
					});
					$('.chakan').click(function(){
						var user_id=$(this).attr('b');
						sessionStorage.user_id=user_id
						window.location.href='http://localhost:8005/detial.html'
						
					});
					$('#xin').click(function(){
						sessionStorage.clear()
						window.location.href='http://localhost:8005/xiugai.html'
					})
					$('.xiugai').click(function(){
						var sd=$(this).attr('a')
						for(var i=0;i<data.length;i++){
							if(sd==data[i].user_id){
								sessionStorage.user_name=data[i].user_name;
								sessionStorage.user_sex=data[i].user_sex;
								sessionStorage.user_age=data[i].user_age;
								sessionStorage.user_tel=data[i].user_tel;
								sessionStorage.user_post=data[i].user_post;
								sessionStorage.user_hobby=data[i].user_hobby;
								sessionStorage.user_skill=data[i].user_skill;
								sessionStorage.user_id=data[i].user_id;
								sessionStorage.user_int=data[i].user_int;
								sessionStorage.a=12;
								window.location.href='http://localhost:8005/xiugai.html'
							}
						}
						
					})
				},
				error: function() {
					alert('error!')
				},
				complete: function() {
					getPageBar();
					
				}
				
			});
		}


	function getPageBar(){
            //页码大于最大页数
            if(curPage>totalPage) curPage=totalPage;
            //页码小于1
            if(curPage<1) curPage=1;
            pageStr = "<span>共"+total+"条</span><span>"+curPage+"/"+totalPage+"</span>";

            //如果是第一页
            if(curPage==1){
                pageStr += "<span>首页</span><span>上一页</span>";
            }else{
                pageStr += "<span><a href='javascript:void(0)' onclick='fn(1)'>首页</a></span><span><a href='javascript:void(0)' onclick='fn("+(curPage-1)+")'>上一页</a></span>";
            }
			
            //如果是最后页
            if(curPage>=totalPage){
                pageStr += "<span>下一页</span><span>尾页</span>";
            }else{
                pageStr += "<span><a href='javascript:void(0)' onclick='fn("+(parseInt(curPage)+1)+")'>下一页</a></span><span><a href='javascript:void(0)' onclick='fn("+totalPage+")'>尾页</a></span>";
            }

            $("#pagecount").html(pageStr);
        }
	
	
	
	
	
	
var express=require('express');
var router=express.Router();
arr=[{user_name:'小明',user_sex:'0',user_age:33,user_tel:'1234567',user_post:'经理',user_hobby:'打球',user_skill:'各种',user_id:1,'user_int':'研、挖掘、分析用户需求，准确抽象出产品需求，合理判断需求的优先级，并维护产品需求池'},{user_name:'小丽',user_sex:'1',user_age:23,user_tel:'1234567',user_post:'经理',user_hobby:'打球',user_skill:'各种',user_id:2,'user_int':'研、挖掘、分析用户需求，准确抽象出产品需求，合理判断需求的优先级，并维护产品需求池'},{user_name:'小黄',user_sex:'1',user_age:38,user_tel:'1234567',user_post:'经理',user_hobby:'打球',user_skill:'各种',user_id:3,'user_int':'研、挖掘、分析用户需求，准确抽象出产品需求，合理判断需求的优先级，并维护产品需求池'},{user_name:'小李',user_sex:'0',user_age:28,user_tel:'1234567',user_post:'经理',user_hobby:'打球',user_skill:'各种',user_id:4,'user_int':'研、挖掘、分析用户需求，准确抽象出产品需求，合理判断需求的优先级，并维护产品需求池'},{user_name:'小张',user_sex:'0',user_age:33,user_tel:'1234567',user_post:'经理',user_hobby:'打球',user_skill:'各种',user_id:5,'user_int':'研、挖掘、分析用户需求，准确抽象出产品需求，合理判断需求的优先级，并维护产品需求池'},{user_name:'小赵',user_sex:'1',user_age:23,user_tel:'1234567',user_post:'经理',user_hobby:'打球',user_skill:'各种',user_id:6,'user_int':'研、挖掘、分析用户需求，准确抽象出产品需求，合理判断需求的优先级，并维护产品需求池'},{user_name:'小钱',user_sex:'0',user_age:38,user_tel:'1234567',user_post:'经理',user_hobby:'打球',user_skill:'各种',user_id:7,'user_int':'研、挖掘、分析用户需求，准确抽象出产品需求，合理判断需求的优先级，并维护产品需求池'},{user_name:'小孙',user_sex:'1',user_age:28,user_tel:'1234567',user_post:'经理',user_hobby:'打球',user_skill:'各种',user_id:8,'user_int':'研、挖掘、分析用户需求，准确抽象出产品需求，合理判断需求的优先级，并维护产品需求池'},{user_name:'小王',user_sex:'0',user_age:28,user_tel:'1234567',user_post:'经理',user_hobby:'打球',user_skill:'各种',user_id:9,'user_int':'研、挖掘、分析用户需求，准确抽象出产品需求，合理判断需求的优先级，并维护产品需求池'}]

router.get('st',function(req,res){
//	console.log('into .....')
	var teg=req.param('teg')
	var tem=req.param('tem')
	if(teg==1&&tem==2){
		res.send(arr)
	}
})
router.get('/del',function(req,res){
	var user_id=req.param('user_id')
	for(var i=0;i<arr.length;i++){
		if(user_id==arr[i].user_id){
			arr.splice(i,1)
			res.send({flag:1})
		}
	}
})
router.get('zeng',function(req,res){
	var user_name=req.param('user_name')
	var user_sex=req.param('user_sex')
	var user_age=req.param('user_age')
	var user_tel=req.param('user_tel')
	var user_post=req.param('user_post')
	
	var user_hobby=req.param('user_hobby')
	var user_skill=req.param('user_skill')
	var user_int=req.param('user_int')
	var user_id=req.param('user_id')
	
	if(user_name&&user_age&&user_tel&&user_post&&user_hobby&&user_skill&&user_id){
		for(var i=0;i<arr.length;i++){
			if(user_id==arr[i].user_id){
				res.send({flag:'2'})
				return
			}else{
				if(i==(arr.length-1)){
					arr.push({
				user_name:user_name,
				user_sex:user_sex,
				user_age:user_age,
				user_tel:user_tel,
				user_post:user_post,
				user_hobby:user_hobby,
				user_skill:user_skill,
				user_int:user_int,
				user_id:user_id
					})
					res.send({flag:'1'})
				}
			}
		}
		
		
	}else{
		res.send({flag:'3'})
	}
})
router.get('/xiugai',function(req,res){
	var user_name=req.param('user_name')
	var user_sex=req.param('user_sex')
	var user_age=req.param('user_age')
	var user_tel=req.param('user_tel')
	var user_post=req.param('user_post')
	var user_hobby=req.param('user_hobby')
	var user_skill=req.param('user_skill')
	var user_int=req.param('user_int')
	var user_id=req.param('user_id')
	if(user_name&&user_sex&&user_age&&user_tel&&user_post&&user_hobby&&user_skill&&user_id){
		for(var i=0;i<arr.length;i++){
			if(user_id==arr[i].user_id){
				console.log('成功')
				arr.splice(i,1,{
				user_name:user_name,
				user_sex:user_sex,
				user_age:user_age,
				user_tel:user_tel,
				user_post:user_post,
				user_hobby:user_hobby,
				user_skill:user_skill,
				user_int:user_int,
				user_id:user_id
					})
				res.send({flag:'1'})
			}
			
		}
		
	}else{
		res.send({flag:'2'})
	}
})

router.get('/detial',function(req,res){
	var user_id=req.query.user_id
	for(var i=0;i<arr.length;i++){
			if(user_id==arr[i].user_id){
				res.send(arr[i])
			}
			
		}
})
router.get('/page',function(req,res){
	var pageNum = req.param('pageNum');
    total=arr.length;
    pageSize=2;
    totalPage=Math.ceil(total/pageSize);
    var start=pageSize*(pageNum-1);
    var end = pageSize*pageNum;
    console.log(start+'|'+end);
    var results = arr.slice(start,end);
    var data = {total:total,pageSize:pageSize,totalPage:totalPage,list:results};
    res.send(data) 
	
    
})
router.get('arch',function(req,res){
    
})

module.exports=router








fenye()
		function fenye(){
			$.ajax({
				url:'http://localhost:8888/item/page',
				type:'get',
				async:true,
				success:function(data){
					var nums = 5; //每页出现的数量
					var pages = Math.ceil(data.length/nums); //得到总页数
					
					var thisDate = function(curr){
					    //此处只是演示，实际场景通常是返回已经当前页已经分组好的数据
					    var str = '', 
					    	last = curr*nums - 1;
					    last = last >= data.length ? (data.length-1) : last;
					    for(var i = (curr*nums - nums); i <= last; i++){
					        str += '<li>'+ data[i] +'</li>';
					    }
					    return str;
					};
					
					//调用分页
					laypage({
					    cont: 'biuuu_city',
					    pages:pages, //总页数
					    jump:function(obj){ //触发分页后的回调函数
					        document.getElementById('biuuu_city_list').innerHTML = thisDate(obj.curr);
					    }
					})
				},
				error:function(){
					
				}
			})
		}