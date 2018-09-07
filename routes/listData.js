var  express=require('express')

var mysql=require('mysql')
var router=express.Router();


var pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'zz950424',
	database:'mydata',
	port:3306
})

function data(id,callback){
	console.log('fanyuzhuang.......')
	pool.getConnection(function(err,connection){
//		console.log(111111111111111111111111)
		var mysqlData = 'select * from user where id = ?';
		connection.query(mysqlData,[id],function(err,reqult){
			console.log(reqult)
			connection.release();	//释放
			callback(err,reqult)
		})
	})
}
router.post('/login',function(req,res){
	var uname = req.body['fanyuzhuang'];
	var pwd = req.body['123456'];
})
router.get('/list',function(req,res){
	var id = 3
	data(id,function(err,reqult){
		console.log('111111111111111'+reqult)
		res.send(reqult)
	})
//	res.send(d)
//	pool.getConnection(function(err,connection){
//		console.log(111111111111111111111111)
//		var mysqlData = 'select * from user';
//		connection.query(mysqlData,function(err,reqult){
//			console.log(reqult)
//			res.send(reqult)
//		})
//	})
})
module.exports=router;
