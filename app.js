const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require("express-session")
const expressHandlebarsSection = require('express-handlebars-sections');




//router
const authRouter = require('./components/auth/authRouter');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const roomsRouter = require('./components/rooms/roomModel/roomRouter');
const servicesRouter = require('./components/services');

const myAccountRouter = require('./components/myAccount');
const passport= require('./auth/passport');
const apiProductRouter = require('./api/product');
const sessionHandler = require('./middlewares/sessionHandler');

const loggers = require("./middlewares/logger");


const app = express();

// var handlebars = require('handlebars');
// var exphbs = require('exphbs');

// app.engine('hbs', exphbs.create(handlebars));
// app.set('view engine', 'hbs');

// const hbs = exphbs.create({
//   extname:"hbs",
//   defaultLayout:"main",
//   layoutsDir:__dirname+"view/layouts",
//   partialsDir:__dirname+"view/partitals",
//   sections: expressHandlebarsSection(),
// })
// expressHandlebarsSection(hbs);


app.set('views', __dirname + '/views');

app.set('view engine','hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  cookie:{maxAge:1000*60*60*24*365},
  secret: process.env.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/product',apiProductRouter);

app.use(function (req, res, next) {
  res.locals.user = req.user
  //res.locals.authenticated = !req.user.anonymous
  next()
})
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/rooms', roomsRouter);
app.use('/services', servicesRouter);
app.use('/auth', authRouter);
app.use('/myaccount',myAccountRouter);

app.use(sessionHandler);
app.use(loggers);

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
