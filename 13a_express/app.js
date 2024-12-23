var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// using next()
const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}
const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}
const cb2 = function (req, res) {
  res.send('Hello from C!')
}
app.get('/example/c', [cb0, cb1, cb2])
// simple routes
app.get('/about', (req, res) => {
  res.send('<h2>About Us...</h3>')
})
app.get('/contact', (req, res) => {
  res.send('<h2>Please use carrier pigeon to contact our agents</h3>')
})
const greetWelcome = (req, res) => {
  res.send('<h4>A Welcome Greeting</h4>')
}
// multi routes 
app.get('/greet','/welcome', greetWelcome)

// passing URL parameters
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})

// read JSON and return it
const fs = require("node:fs");
let dataRetrieved = ''
app.get('/regions', (req, res, next) => {
  // read in the JSON
  fs.readFile("./data/regions.json", "utf8", (error, data) => {
    console.log(data)
    if (error) {
      console.log(error)
      return
    }
    dataRetrieved = data
  }), next()
},
  // return the JSON to the request client
  (req, res) => {
    res.send(dataRetrieved)
  }
)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
