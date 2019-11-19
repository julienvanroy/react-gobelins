const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

let Users = require('../models/schemaUsers');
const md5 = require('md5');

router
  .use(express.static('resources'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .get("/users", (req, res) => {
    Users.find({}, function (err, quizzes) {
      if (err) {
        res.status(400);
        res.json({
          error: "Bad request"
        });
      } else {
        res.json(quizzes);
        res.status(200);
      }
    });
  })
  .get("/users/:id", (req, res) => {
    Users.findById(req.params.id, function (err, quizzes) {
      if (err) {
        res.status(400);
        res.json({
          error: "Bad request"
        });
      } else {
        res.json(quizzes);
        res.status(200);
      }
    });
  })
  .post("/login", (req, res) => {
    if (!req.body.username || !req.body.password) {
      res.json({isConnected: false})
    } else {
      Users.findOne({username: req.body.username, password: md5(req.body.password)})
        .exec((err, data) => {
          if (err) console.log("error", err);
          else {
            if (data) {
              res.json({isConnected: true});
              console.log('cc')
            }
            else res.json({isConnected: false})

          }
        })
    }
  })
  .use((req, res) => {
    res.status(400);
    res.json({
      error: "Bad request"
    });
  });

module.exports = router;
