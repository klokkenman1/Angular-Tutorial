const express = require('express');
const router = express.Router();
const mongoose = require("../db/mongoose");
const auth =  require('../authentication');

router.post('/login', (req, res) => {
  if(req.body.username && req.body.password){
    mongoose.User.findOne({username: req.body.username, password: req.body.password}, (err, user) =>{
      if (err) return console.error(err);
      if(user){
        console.log("loggedin")
        res.status(200).send(auth.encodeToken(user._id));
      } else{
        res.status(400).send("Wrong username or password");
      }
    });
  } else{
    res.status(400).send("Wrong post body");
  }
});

router.post('/register', (req, res) => {
  if(req.body.username && req.body.password){
    mongoose.User.where({username: req.body.username}).count((err, count) =>{
      if (err) return console.error(err);
      if(count == 0){
        var user = new mongoose.User({ username: req.body.username, password: req.body.password })
        user.save(() => {
          res.send(auth.encodeToken(user._id));
        });
      } else{
        res.status(409).send("Username taken");
      }
    });
  } else{
    res.status(400).send("Wrong post body");
  }
});


module.exports = router;