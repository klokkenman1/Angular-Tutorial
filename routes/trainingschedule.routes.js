const express = require('express');
const router = express.Router();
const mongoose = require("../db/mongoose");

router.get('/', (req, res) => {
  var token = (req.header('X-Access-Token')) || '';
  auth.decodeToken(token, (err, payload) => {
    if (err) {
      console.log('Error handler: ' + err.message);
      res.status((err.status || 401));
    } else {
      mongoose.Trainingschedule.find((err, result) => {
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
  if (req.body.name) {
    auth.decodeToken(token, (err, payload) => {
      if (err) {
        console.log('Error handler: ' + err.message);
        res.status((err.status || 401));
      } else {
        var sportschedule = new mongoose.Trainingschedule({ user: result._id, name: req.body.name })
        sportschedule.save(() => {
          res.send(sportschedule);
        });
      }
    });
  } else {
    res.send("Wrong post body");
  }
});

router.put("/:id/:day", (req, res) => {
  var token = (req.header('X-Access-Token')) || '';
  if (req.params["id"] && req.body.exercise && req.params["day"]) {
    auth.decodeToken(token, (err, payload) => {
      if (err) {
        console.log('Error handler: ' + err.message);
        res.status((err.status || 401));
      } else {
        mongoose.Trainingschedule.findOne({ user: payload.sub_id, _id: req.params["id"] }, (err, trainingschedule) => {
          if (err) return console.error(err);
          if (trainingschedule) {
            trainingschedule.days[req.params["day"]] = (req.body.exercise);
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