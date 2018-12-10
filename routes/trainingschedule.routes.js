const express = require('express');
const router = express.Router();
const mongoose = require("../db/mongoose");

//TODO: add authentication (maybe a token)

router.get('/', (req, res) => {
  mongoose.Trainingschedule.find((err, result) => {
    if (err) return console.error(err);
    res.send(result);
  })
});

router.get('/:id', (req, res) => {
  if(req.params["id"]){
    mongoose.Trainingschedule.findOne({_id: req.params["id"]}, (err, result) => {
      if (err) return console.error(err);
      res.send(result);
    })
  }
});

router.get('/user/:id', (req, res) => {
  if(req.params["id"]){
    mongoose.Trainingschedule.find({user: req.params["id"]}, (err, result) => {
      if (err) return console.error(err);
      res.send(result);
    })
  }
});

router.post('/', (req, res) => {
  if(req.body.username && req.body.name){
    mongoose.User.find({username: req.body.username}, (err, result) =>{
      if (err) return console.error(err);
      if(result){
        var sportschedule = new mongoose.Trainingschedule({ user: result._id, name: req.body.name})
        sportschedule.save(() => {
          res.send(sportschedule);
        });
      } else{
        res.send("User doenst exist");
      }
    });
  } else{
    res.send("Wrong post body");
  }
});

router.put("/:id/:day", (req,res) =>{
  if(req.params["id"] && req.body.exercise && req.params["day"]){
    mongoose.Trainingschedule.findOne({_id: req.params["id"]}, (err, trainingschedule) =>{
      if (err) return console.error(err);
      if(trainingschedule){
        trainingschedule.days[req.params["day"]] = (req.body.exercise);
        trainingschedule.save(() => {
          res.send(trainingschedule);
        });
      } else{
        res.send(401);
      }
    });
  } else{
    res.send(401);
  }
});

// router.delete("/", (req,res) =>{
//   if(req.body.username && req.body.password){
//     mongoose.User.findOne({username: req.body.username, password: req.body.password}, (err, user) =>{
//       if (err) return console.error(err);
//       if(user){
//         user.remove(() => {
//           res.send(user);
//         });
//       } else{
//         res.send(401);
//       }
//     });
//   } else{
//     res.send(401);
//   }
// });

module.exports = router;