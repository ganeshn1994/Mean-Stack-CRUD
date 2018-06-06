"use strict";

const express = require('express');
var mongoose = require('mongoose');

var Users = require('./model/UserSchema');
mongoose.connect('mongodb://localhost/user');

const user     = require('./controller/user')

const morgan     = require('morgan');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended:false});

const cors = require('cors');

const app = express();

app.use(morgan('combined'));

app.use('/user', user);
app.use(cors());

app.listen(3031, () => console.log('Example app listening on port 3031!'));

