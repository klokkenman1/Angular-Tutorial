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
      mongoose.Trainingschedule.find({user: payload.sub}, (err, result) => {
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
        mongoose.Trainingschedule.findOne({ _id: req.params["id"] }, (err, result) => {
          if (err) return console.error(err);
          res.send(result);
        })
      }
    })
  }
});

router.post('/', (req, res) => {
  var token = (req.header('X-Access-Token')) || '';
  if (req.body.name && req.body.days) {
    auth.decodeToken(token, (err, payload) => {
      if (err) {
        console.log('Error handler: ' + err.message);
        res.status((err.status || 401));
      } else {
        var sportschedule = new mongoose.Trainingschedule({ user: payload.sub, name: req.body.name, days: req.body.days })
        sportschedule.save(() => {
          res.send(sportschedule);
        });
      }
    });
  } else {
    res.send("Wrong post body");
  }
});

router.put("/:id", (req, res) => {
  var token = (req.header('X-Access-Token')) || '';
  if (req.body.name && req.body.days && req.params["id"]) {
    auth.decodeToken(token, (err, payload) => {
      if (err) {
        console.log('Error handler: ' + err.message);
        res.status((err.status || 401));
      } else {
        mongoose.Trainingschedule.findOne({ user: payload.sub, _id: req.params["id"] }, (err, trainingschedule) => {
          if (err) return console.error(err);
          if (trainingschedule) {
            trainingschedule.name = req.body.name;
            trainingschedule.days = req.body.days;
            trainingschedule.save(() => {
              res.send(trainingschedule);
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
        mongoose.Trainingschedule.deleteOne({ user: payload.sub, _id: req.params["id"] }, (err) => {
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