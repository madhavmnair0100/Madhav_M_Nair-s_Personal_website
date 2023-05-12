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
function generateUniqueId(length) {
  const alphanumeric = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let uniqueId = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphanumeric.length);
    uniqueId += alphanumeric.charAt(randomIndex);
  }
  return uniqueId;
}

// Usage
const id = generateUniqueId(10);
console.log(id);

const uniqueId = id;

// Define the protected page
app.get('/home', function (req, res, next) {
  // Check if the cookie exists and contains the correct unique identifier
  if (req.cookies[uniqueId] === 'visited') {
    // Render the protected page
    res.render('index', { title: 'Signup' });
  } else {
    // Redirect the visitor back to the specific URL
    res.redirect('/');
  }
});

// Define the specific URL
app.get('/', function (req, res, next) {
  // Set the cookie to store the unique identifier
  res.cookie(uniqueId, 'visited', { maxAge: 900000, httpOnly: true });

  // Render the specific URL
  res.render('spinner', { title: 'Loading' });
});

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

// Start the server and listen on your local IP address and port
const port = 3000; // Update the port number if needed
const ip = '192.168.18.117';
// Update with your local IP address
app.listen(port, ip, function () {
  console.log(`Server running on ${ip}:${port}`);
});
const os = require('os');

const interfaces = os.networkInterfaces();
let ipAddress;

Object.keys(interfaces).forEach((interfaceName) => {
  const interface = interfaces[interfaceName];

  interface.forEach((info) => {
    if (info.family === 'IPv4' && !info.internal) {
      ipAddress = info.address;
    }
  });
});

console.log('Device IP Address:', ipAddress);


module.exports = app;
