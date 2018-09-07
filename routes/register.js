var express = require("express");
var mysql=require('mysql');
var router = express.Router();
var arr = [{uname:'adam',pwd:"123456"}];

//数据库
var pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'zz950424',
	database:'mydata',
	port:3306
})

function getUserByName(uname,callback){
	console.log('fanyuzhuang.......')
	pool.getConnection(function(err,connection){
//		console.log(111111111111111111111111)
		var mysqlData = 'select * from user where uname = ?';
		connection.query(mysqlData,[uname],function(err,result){
			console.log(result)
			connection.release();	//释放
			callback(err,result)
		})
	})
}


//注册
router.post("/register",function(req,res){
	
	var uname = req.body.username;
	var pwd = req.body["password"];
	var sex = req.body["sex"];
	var tel = req.body["tel"];
	var hobby = req.body["hobby"];
	
	getUserByName(uname,function(err,result){
		if (result.length == 0) {
			pool.getConnection(function(err,connection){
				var sql_uname = 'insert into user(uname,pwd,id) values(?,?,0)';
				connection.query(sql_uname,[uname,pwd],function(err,result){
					console.log('into result:'+result)
//					res.send(result)
//					if (result.insertId>0) {
						res.send({flag:1})
//					}
				})
			})
		} else if(result.length>0){
			res.send({flag:2})
		}else{
			res.send({flag:3})
		}
			
	})
	
//	console.log(uname+','+pwd+','+sex+','+tel+','+hobby)
//	for (var i=0;i<arr.length;i++) {
//		if(uname==arr[i].uname){
//			res.send({flag:2})
//			return;
//		}
//	}
//	if(uname&&pwd&&sex&&tel&&hobby){
//		res.send({flag:1})
//		arr.push({
//			'uname':uname,
//			'pwd':pwd,
//			'sex':sex,
//			'tel':tel,
//			'hobby':hobby
//		})
//		
//		
//	}else{
//		res.send({flag:3})
//	}
//	console.log(arr)
	
	
});
//登录
router.post('/denglu',function(req,res){
	var uname = req.body["user_name"];
	var pwd = req.body["pass_word"];
	
	if(uname==arr[0].uname&&pwd==arr[0].pwd){
		res.send({flag:1,msg:'登陆成功'})
		req.session.uname = uname;
	}else if(pwd==arr[i].pwd&&uname!=arr[i].uname){
		res.send({flag:2,msg:"用户名不存在"})
		
	}else{
		if (i==(arr.length-1)){
			res.send({flag:3,msg:"无法登录"})
		}
		
	}
	
	
//	console.log('into up......')
//	var form = new formidable.IncomingForm();   //创建IncomingForm对象
//	form.uploadDir = 'public/upload/temp/';  //设置上传文件路径

	// 如果form.uploadDir不赋值，他的默认位置是c:user/用户名/Appdata
	// form.encoding = 'utf-8'  //设定文件的编码

//	form.parse(req,function(err,fields,files){
//		for(var i in files){
//			var file = files[i];
//			var fName = (new Date()).getTime();  //给图片设置的名称 时间戳
//			switch (file.type){
//				case 'image/jpeg':
//					fName = fName + '.jpeg';
//					break;
//				case 'image/png':
//					fName = fName + '.png';
//					break;
//			}
//			var newPath = 'public/upload/'+fName;
//			// fs 重新命名
//			fs.renameSync(file.path,newPath);  //重命名
//			res.send(fName)
//		}
//	});
	
	

////	console.log(name +","+pwd);
//	for(var i in arr){
//		if(uname==arr[i].uname&&pwd==arr[i].pwd){
//				res.send({flag:1,msg:'登陆成功'})
//		}else if(pwd==arr[i].pwd&&uname!=arr[i].uname){
//				res.send({flag:2,msg:"用户名不存在"})
//			
//		}else{
//			if (i==(arr.length-1)){
//				res.send({flag:3,msg:"无法登录"})
//			}
//			
//		}
//	}
		
})
router.get('/search',function(req,res){
	console.log('into search......');
	var search = req.query.search;

	pool.getConnection(function(err,connection){
//		console.log(111111111111111111111111)
		var mysqlData = "select * from user where uname like '%' ? '%'";
		connection.query(mysqlData,[search],function(err,result){
			console.log(result)
			connection.release();	//释放
//			callback(result)
			res.send(result)
		})
	})
})




module.exports = router;
