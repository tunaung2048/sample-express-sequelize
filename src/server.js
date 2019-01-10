const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');

// const sequelize = require('./utils/sequelize');

// Imports Routes
const rootRouter = require('./routes/index');


/** 
 * application wide middleware 
 */
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Favicon
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));

/**
 * Template
 */
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

/**
 * Serve Static Files
 */
app.use('/public', express.static('public'));

/** 3. Route Rleated Middleware */
app.use('/', rootRouter);


/* 
 * Error Handling
 */
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;