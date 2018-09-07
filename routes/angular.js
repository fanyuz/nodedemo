var express = require('express');
var router = express.Router();
var myjson = [{
  "data":[
    {
      "date":"阿水"
      ,"exp":"19"
      ,"name":"男"
      ,"pic":"台湾"
      ,"place":"会计师"
      ,"press":123
      
    },
   {
      "date":"茜拉"
      ,"exp":"18"
      ,"name":"女"
      ,"pic":"泰国"
      ,"place":"按摩"
      ,"press":54
      
    },
    {
      "date":"科比"
      ,"exp":"13"
      ,"name":"男"
      ,"pic":"美国"
      ,"place":"球员"
      ,"press":322
      
    },
    {
      "date":"犀利哥"
      ,"exp":"3"
      ,"name":"男"
      ,"pic":"柬埔寨"
      ,"place":"行为艺术"
      ,"press":10000
      
    },
  ]
}]
router.get('/list',function(req,res){
	res.send(myjson[0].data)
})


module.exports = router;