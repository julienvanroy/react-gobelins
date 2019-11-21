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
  .all("/auth/*", (req, res, next) => {
    if (!req.headers || !req.headers.username || !req.headers.password) {
      res.json({isConnected: false});
      return;
    }
    Users.findOne({username: req.headers.username, password: md5(req.headers.password)})
      .exec((err, data) => {
        if (err) console.log("error", err);
        else {
          if (data) {
            next();
          } else res.json({isConnected: false})
        }
      })
  })
  .all("/admin/*", (req, res, next) => {
    if (!req.headers || !req.headers.username || !req.headers.password || !req.headers.admin) {
      res.json({isConnected: false});
      return;
    }
    Users.findOne({username: req.headers.username, password: md5(req.headers.password), admin: req.headers.admin})
      .exec((err, data) => {
        if (err) console.log("error", err);
        else {
          if (data) {
            next();
          } else res.json({isConnected: false})
        }
      })
  })
  .get("/admin/users", (req, res) => {
    Users.find({}, function (err, users) {
      if (err) {
        res.status(400);
        res.json({
          error: "Bad request"
        });
      } else {
        users = users.map(user => {
          user.password = undefined
          return user;
        });
        res.json(users);
        res.status(200);
      }
    });
  })
  .get("/auth/users/:id", (req, res) => {
    Users.findById(req.params.id, function (err, user) {
      if (err) {
        res.status(400);
        res.json({
          error: "Bad request"
        });
      } else {
        user.password = undefined;
        user.save();
        res.json(user);
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
              console.log(data.admin)
              res.json({isConnected: true, isAdmin: data.admin});
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
