const express = require('express');
const router = express.Router();
const mongoose = require("../db/mongoose");
const auth =  require('../authentication');

router.get('/', (req, res) => {
  var token = (req.header('X-Access-Token')) || '';
  auth.decodeToken(token, (err, payload) => {
    if (err) {
      console.log('Error handler: ' + err.message);
      res.status((err.status || 401));
    } else {
      mongoose.Food.find({ user: payload.sub }, (err, result) => {
        if (err) return console.error(err);
        res.send(result);
      })
    }
  })
});

router.get('/:id', (req, res) => {
  var token = (req.header('X-Access-Token')) || '';
  if (req.params["id"]) {
    auth.decodeToken(token, (err, payload) => {
      if (err) {
        console.log('Error handler: ' + err.message);
        res.status((err.status || 401));
      } else {
        mongoose.Food.findOne({ _id: req.params["id"], name: payload.sub }, (err, result) => {
          if (err) return console.error(err);
          res.send(result);
        })
      }
    })
  }
});

router.post('/', (req, res) => {
  var token = (req.header('X-Access-Token')) || '';
  if (req.body.name) {
    auth.decodeToken(token, (err, payload) => {
      if (err) {
        console.log('Error handler: ' + err.message);
        res.status((err.status || 401));
      } else {
        var food = new mongoose.Food({ user: payload.sub, name: req.body.name, date: req.body.date, energy: req.body.energy, fat: req.body.fat, carbohydrate: req.body.carbohydrate, fibre: req.body.fibre, protien: req.body.protien, salt: req.body.salt })
        food.save(() => {
          res.send(food);
        });
      }
    })
  } else {
    res.send("Wrong post body");
  }
});

router.put("/:id", (req, res) => {
  var token = (req.header('X-Access-Token')) || '';
  if (req.params["id"] && req.body.name) {
    auth.decodeToken(token, (err, payload) => {
      if (err) {
        console.log('Error handler: ' + err.message);
        res.status((err.status || 401));
      } else {
        mongoose.Food.findOne({ user: payload.sub, _id: req.params["id"] }, (err, food) => {
          if (err) return console.error(err);
          if (food) {
            food.name = req.body.name;
            food.description = req.body.description;
            food.muscles = req.body.muscles;
            food.save(() => {
              res.send(food);
            });
          } else {
            res.send(401);
          }
        });
      }
    })
  } else {
    res.send(401);
  }
});

router.delete("/:id", (req, res) => {
  var token = (req.header('X-Access-Token')) || '';
  if (req.params["id"]) {
    auth.decodeToken(token, (err, payload) => {
      if (err) {
        console.log('Error handler: ' + err.message);
        res.status((err.status || 401));
      } else {
        mongoose.Food.deleteOne({user: payload.sub, _id: req.params["id"] }, (err) => {
          if (err) return console.error(err);
          return req.params["id"];
        });
      }
    });
  } else {
    res.send(401);
  }
});

module.exports = router;