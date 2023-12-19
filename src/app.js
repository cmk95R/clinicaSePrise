require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const paginate = require('express-paginate')

var indexRouter = require('./routes/index'); 
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var carritoRouter = require('./routes/carrito');
var adminRouter = require('./routes/admin');
var categRouter = require('./routes/category');
var brandRouter = require('./routes/brand');
const userSessionCheck = require('./middlewares/userSessionCheck');
const cookieCheck = require('./middlewares/cookieCheck');

const apisRouter = require('./routes/apis');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//---------------Paginator---------//
app.use(paginate.middleware(4,50))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'..', 'public')));

app.use(methodOverride('_method'));

app.use(session({
  secret : "todaviaSirve",
  resave : true,
  saveUninitialized : true
}));

app.use(cookieCheck);
app.use(userSessionCheck);


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/carrito', carritoRouter);
app.use('/add', productsRouter);
app.use('/admin', adminRouter);
app.use('/api',apisRouter);


app.use('/categories',categRouter);
app.use('/brand',brandRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
