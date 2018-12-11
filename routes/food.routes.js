const express = require('express');
const router = express.Router();
const mongoose = require("../db/mongoose");

//TODO: add authentication (maybe a token)

router.get('/', (req, res) => {
  mongoose.Food.find((err, result) => {
    if (err) return console.error(err);
    res.send(result);
  })
});

router.get('/:id', (req, res) => {
  if(req.params["id"]){
    mongoose.Food.findOne({_id: req.params["id"]}, (err, result) => {
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
        var food = new mongoose.Food({user: result._id, name: req.body.name, date: req.body.date, energy: req.body.energy, fat: req.body.fat, carbohydrate: req.body.carbohydrate, fibre: req.body.fibre, protien: req.body.protien, salt: req.body.salt })
        food.save(() => {
          res.send(food);
        });
      } else{
        res.send("User doenst exist");
      }
    });
  } else{
    res.send("Wrong post body");
  }
});

router.put("/:id", (req,res) =>{
  if(req.params["id"] && req.body.name){
    mongoose.Food.findOne({_id: req.params["id"]}, (err, food) =>{
      if (err) return console.error(err);
      if(food){
        food.name = req.body.name;
        food.description = req.body.description;
        food.muscles = req.body.muscles;
        food.save(() => {
          res.send(food);
        });
      } else{
        res.send(401);
      }
    });
  } else{
    res.send(401);
  }
});

router.delete("/:id", (req,res) =>{
  if(req.params["id"]){
    mongoose.Food.deleteOne({_id : req.params["id"]}, (err) =>{
      if (err) return console.error(err);
        return req.params["id"];
    });
  } else{
    res.send(401);
  }
});

module.exports = router;