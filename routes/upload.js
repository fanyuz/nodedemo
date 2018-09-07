var express = require("express");
var mysql=require('mysql');
var fs = require('fs');
var formidable = require('formidable');
var router = express.Router();

router.post('/up',function(req,res){
	console.log('into up......')
	var form = new formidable.IncomingForm();   //创建IncomingForm对象
	form.uploadDir = 'public/upload/temp/';  //设置上传文件路径

	// 如果form.uploadDir不赋值，他的默认位置是c:user/用户名/Appdata
	// form.encoding = 'utf-8'  //设定文件的编码

	form.parse(req,function(err,fields,files){
		for(var i in files){
			var file = files[i];
			var fName = (new Date()).getTime();  //给图片设置的名称 时间戳
			switch (file.type){
				case 'image/jpeg':
					fName = fName + '.jpeg';
					break;
				case 'image/png':
					fName = fName + '.png';
					break;
			}
			var newPath = 'public/upload/'+fName;
			// fs 重新命名
			fs.renameSync(file.path,newPath);  //重命名
			res.send(fName)
		}
	})


})
module.exports = router;