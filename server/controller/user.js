'use strict';

const express = require('express');
const mongoose = require('mongoose')
var app = express();
const router = express.Router();
var Users = require("../model/UserSchema");
const Morgan = require('morgan');
Morgan(app);
const cors = require('cors');
router.use(cors());


const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended:false});
router.use(bodyParser.json());

router.get('/', (req, res, next) => {
 
    var name=req.query.name;
    // var email=req.query.email;

    var respArray = [];
    Users.find({
        name:name,
        // email:email

    })
    .exec(function(err,user){
        if(err){
            res.send("Error");
        }else{
            console.log(user);
            for(var i=0;i<user.length;i++){

                var resObj = {
                    name : user[i].name,
                    email : user[i].email,
                    phone : user[i].phone,
                    imageUrl: user[i].imageUrl
                }

              

                respArray.push(resObj);

            }
            res.send(respArray);
        }
    });

});

router.post('/useradd', (req, res, next) => {

    var myData = new Users(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });

  router.get('/userlist', (req, res, next) => {
    var respArray =[];
    Users.find({
        name:req.query.name
      })
      .exec(function(err,userlist){
      if(err){
        res.send("Error")
      }else{
        console.log(userlist);
        for(var i=0;i<userlist.length;i++){
                var resObj = {
                    _id : userlist[i]._id,
                    name : userlist[i].name,
                    email : userlist[i].email,
                    phone : userlist[i].phone,
            }
            
            respArray.push(resObj);
        }
        res.send(respArray);
      }
  })
})

router.put('/update', (req,res,next)=>{
    Users.findById(req.body._id, (err, user) => {
        if(err){
            res.status(500).json({errmsg:err});
            user.name = req.body.name,
            user.email = req.body.email,
            user.phone = req.body.phone
            user.save((err,user)=>{
                if(err)
                res.status(500).json({errmsg:err});
                res.status(500).json({msg:user});
            })
        }

    })
})

router.delete('/delete/:id', (req,res,next)=>{
    Users.findByIdAndRemove({_id:req.params.id},(err, user)=>{
        if(err)
        res.status(500).json({errmsg:err});
        res.status(500).json({msg:user});

    })
})


module.exports = router;
