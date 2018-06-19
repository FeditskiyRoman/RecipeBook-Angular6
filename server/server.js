const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config.js');
const routing = require('./routing/routing.js');

const app = express();
const port = config.server.port;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(routing);

mongoose.connect('mongodb://' + config.db.host + ':' + config.db.port + '/' + config.db.name, err => {
  err ? console.log('Can`t connect to DB, err => ', err) : console.log('Connected to DB');
});

app.listen(port, err => {
  if (!err) {
    console.log('Server started at port: ' + port);
  }
})