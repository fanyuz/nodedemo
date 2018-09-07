var express = require('express');
var router = express.Router();
var data = {spending:[
	{time:'jan',category:'shoping',count:2000},
	{time:'feb',category:'shoping',count:3000},
	{time:'march',category:'cart',count:500},
	{time:'april',category:'traffic',count:100},
	{time:'may',category:'cart',count:1000},
	{time:'june',category:'cart',count:800},
	{time:'july',category:'shoping',count:2000},
	{time:'aug',category:'traffic',count:400},
	{time:'sep',category:'traffic',count:500}	
]};
router.get('/list',function(req,res){
	res.redirect('./login.html');	//重定向  	--将404页面跳转到新的页面
//	res.send(data)
	if (req.session.uname!=""&&req.session.uname!=null) {
		getAllsers(function(err,results){
			if (err) {
				res.send(err)
				
				//req.session.destroy(); 		//清除session数据
			} else{
				res.send(results)
			}
		})
	} else{
		res.send({f:0})
	}
})


module.exports = router;