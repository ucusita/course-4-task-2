const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv').config();
const marsRouter = require('./routes/mars');
const marsPhotosRouter = require('./routes/marsph');
const neoRouter = require('./routes/neo');
const testRouter = require('./routes/test');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.get('/mars/manifests/:roverName', marsRouter);
app.get('/mars/photos/:roverName', marsPhotosRouter);
app.get('/neo', neoRouter);
app.get('/', testRouter);

module.exports = app;
