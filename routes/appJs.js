var express = require('express');
var router = express.Router();
							//请求参数     响应参数
//router.get('/login',function(request,response){
//	
//	response.send([{name:'fanyuzhuang'},{name:"xiaohu"}])
//});
router.post('/dengl',function(req,res){
	console.log("fffffffffffffffffffffffffff....")
	var uname = req.body["username"];
	var pwd = req.body["password"];
	console.log(name +","+pwd);
	if(uname=="fyz"){
		if(pwd=="111111"){
			res.send({flag:1,msg:"登陆成功"})
		}else{
			res.send({flag:3,msg:"密码错误"})
		}
		
	}else if(uname!="fyz"){
		res.send({flag:2,msg:"用户名不存在"})
	}else{
		res.send({flag:4,msg:"登录错误"})
	}
	
//	if (uname == "fanyuzhuang" && pwd == "111111") {
//		res.send({flag:1,message:"登陆成功"})
//	} else if(name != "fanyuzhuang" && pwd == "111111"){
//		res.send({flag:2,message:"用户名不存在"})
//	}else if(name == "fanyuzhuang" && pwd != "111111"){
//		res.send({flag:3,message:"密码错误"})
//	}else if(name != "fanyuzhuang" && pwd != "111111"){
//		res.send({flag:4,message:"请输入正确的用户名或密码"})
//	}
})
module.exports=router;
