var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Define the unique identifier for the specific URL
const uniqueId = "my-unique-id";

// Define the protected page
app.get('/home', function(req, res, next) {
  // Check if the cookie exists and contains the correct unique identifier
  if (req.cookies[uniqueId] === 'visited') {
    // Render the protected page
    res.render('index', { title: 'Protected Page' });
  } else {
    // Redirect the visitor back to the specific URL
    res.redirect('/spinner');
  }
});

// Define the specific URL
app.get('/spinner', function(req, res, next) {
  // Set the cookie to store the unique identifier
  res.cookie(uniqueId, 'visited', { maxAge: 900000, httpOnly: true });

  // Render the specific URL
  res.render('spinner', { title: 'Specific URL' });
});

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
