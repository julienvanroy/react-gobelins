const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

let Users = require('./db/schemaUsers');

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
    .use((req, res) => {
        res.status(400);
        res.json({
            error: "Bad request"
        });
    });

module.exports = router;
