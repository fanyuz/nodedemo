var express = require('express');
var mysql = require('mysql');
var router = express.Router();
//var data = [
//	{uname:'张宇',tel:'18635665951',company:'gool',jibie:'CEO',id:1,age:30},
//	{uname:'李四',tel:'18635665951',company:'gool',jibie:'CEO',id:2,age:25},
//	{uname:'张三',tel:'18635665951',company:'gool',jibie:'CEO',id:3,age:19},
//	{uname:'马六',tel:'18635665951',company:'gool',jibie:'CEO',id:4,age:44},
//	{uname:'张8',tel:'18635665951',company:'gool',jibie:'CEO',id:5,age:17},
//	{uname:'麻麻',tel:'18635665951',company:'gool',jibie:'CEO',id:6,age:68},
//	{uname:'王五',tel:'18635665951',company:'gool',jibie:'CEO',id:7,age:38}
//];

var pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'zz950424',
	database:'mydata',
	port:3306
})
function getTotal(callback){
	pool.getConnection(function(err,connection){
		console.log(111111111111111111111111);
		var total = 0;
		var mysqlData = 'select * from user';
		connection.query(mysqlData,function(err,reqult){
			if (err) {
				console.log("total_Error:"+err.message)
				return ;
			}
			connection.release();
			callback(err,total)
		})
	})
}
//列表
router.get('/list',function(req,res){
	function data(){
		getTotal()
	}
	
	
	
//	function getResults(pageNum,callback){
//		var pageSize = 3;
//		var startPage = pageSize*(pageNum-1);
//		pool.getConnection(function(err,connection){
////			console.log(111111111111111111111111)
//			var mysqlData = 'select * from user limit ?,?';
//			connection.query(mysqlData,[pageNum,startPage],function(err,reqult){
//				if (err) {
//					console.log("total_Error:"+err.message)
//					return ;
//				}
//				connection.release();
//				res.send(reqult)
//				callback(err,total)
//			})
//		})
//	}
	
});
////删除
//router.get('/del',function(req,res){
//	var id=req.param('id');
////	concole.log(req)
//	for (var i=0;i<data.length;i++) {
//		if(id == data[i].id){
//			data.splice(i,1);
//			res.send({flag:1})
//		}else{
//			if(i==data.length-1){
//				res.send({flag:2})
//			}
//			
//		}
//	}
//});
////详情
//router.get('/detail',function(req,res){
//	var id = req.param('id');
//	for (var i=0;i<data.length;i++) {
//		if (id == data[i].id) {
//			console.log(data[i])
//			res.send(data[i]);
//		}
//	}
//})
////添加
//router.get('/add',function(req,res){
//	var id = req.query.id;
//	var uname = req.query.uname;
//	var age = req.query.age;
//	var tel = req.query.tel;
//	var company = req.query.company;
//	var jibie = req.query.jibie;
//	for (var i=0;i<data.length;i++) {
//		if(id==data[i].id){
//			res.send({flag:2})
//			return;
//		}
//	}
////	console.log(id+">>"+uname+">>"+age+">>"+tel+">>"+company+">>"+jibie)
// if(id&&uname&&age&&tel&&company&&jibie){
//
//		data.push({
//			'id':id,
//			'uname':uname,
//			'age':age,
//			'tel':tel,
//			'company':company,
//			'jibie':jibie
//		})
//		res.send({flag:1})
//
//	}else{
//		res.send({flag:3})
//	}
//})
//router.get('/page',function(req,res){
//	var pageNum = req.param('pageNum');
//  total=data.length;
//  pageSize=6;
//  totalPage=Math.ceil(total/pageSize);
//  var start=pageSize*(pageNum-1);
//  var end = pageSize*pageNum;
//  console.log(start+'|'+end);
//  var results = data.slice(start,end);
//  var arr = {total:total,pageSize:pageSize,totalPage:totalPage,list:results};
//  res.send(arr) 
//	
//  
//})
module.exports = router;
