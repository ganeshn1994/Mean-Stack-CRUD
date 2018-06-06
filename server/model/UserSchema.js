'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    _id:String,
    name:String,
    email:String,
    phone:String,
    imageUrl:String
 });

 var Users = mongoose.model("Users",UserSchema);
 module.exports = Users;

// var inval = new Users({
    
//     name:'xyz',
//     email:'xyz@xyz.com',
//     phone:'1212121221',
//     imageUrl:'/1.png'

// });

// inval.save(function(error)
// {
//     console.log("Your bee has been saved!");
//      if (error) {
//      console.error(error); }
// });
