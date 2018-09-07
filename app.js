var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')

var index = require('./routes/index');
var users = require('./routes/users');
var nodefyz = require('./routes/appJs');
var register = require('./routes/register');
var list = require('./routes/list');
var examlist = require('./routes/examlist')
var angular = require('./routes/angular')
var listData=require('./routes/listData')
var upload = require('./routes/upload')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
	secret:"12313",
	name:"adam",
	resave:false,
	saveUninitialized:true
}))

app.use('/', index);
app.use('/users', users);
app.use('/user',nodefyz);
app.use('/user',register);
app.use('/item',list);
app.use('/categ',examlist)
app.use('/custom',angular)
app.use('/list',listData)
app.use('/upload',upload)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//res.header("Access-Control-Allow-Origin",'*');//允许所有人访问
app.listen('8888',function(){
	console.log('server start....')
})
module.exports = app;
