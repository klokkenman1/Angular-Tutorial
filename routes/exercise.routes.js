const express = require('express');
const router = express.Router();
const mongoose = require("../db/mongoose");

//TODO: add authentication (maybe a token)

router.get('/', (req, res) => {
  mongoose.Exercise.find((err, result) => {
    if (err) return console.error(err);
    res.send(result);
  })
});

router.get('/:id', (req, res) => {
  if (req.params["id"]) {
    mongoose.Exercise.findOne({ _id: req.params["id"] }, (err, result) => {
      if (err) return console.error(err);
      res.send(result);
    })
  }
});

router.post('/', (req, res) => {
  if (req.body.name && req.body.description && req.body.muscles) {
    var exercise = new mongoose.Exercise({ name: req.body.name, description: req.body.description, muscles: req.body.muscles })
    exercise.save(() => {
      res.send(exercise);
    });
  } else {
    res.send("Wrong post body");
  }
});

router.put("/:id", (req, res) => {
  if (req.params["id"] && req.body.name && req.body.description && req.body.muscles) {
    mongoose.Exercise.findOne({ _id: req.params["id"] }, (err, exercise) => {
      if (err) return console.error(err);
      if (exercise) {
        exercise.name = req.body.name;
        exercise.description = req.body.description;
        exercise.muscles = req.body.muscles;
        exercise.save(() => {
          res.send(exercise);
        });
      } else {
        res.send(401);
      }
    });
  } else {
    res.send(401);
  }
});

router.delete("/:id", (req, res) => {
  if (req.params["id"]) {
    mongoose.Exercise.deleteOne({ _id: req.params["id"] }, (err) => {
      if (err) return console.error(err);
      return req.params["id"];
    });
  } else {
    res.send(401);
  }
});

module.exports = router;