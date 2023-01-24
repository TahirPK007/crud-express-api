const express = require('express');
const connection = require('../connection');
const router = express.Router();

const {sign}=require('jsonwebtoken');

router.post('/create', (req, res, next) => {
    let auth = req.body;
    query = "insert into auth (username,password) values(?,?)";
    connection.query(query, [auth.username, auth.password], (err, results) => {
        if (!err) {
            return res.status(200).json({ message: "user added successfully" });
        }
        else {
            return res.status(500).json(err);
        }
    });
});

router.post('/login', (req, res, next) => {
    let auth1 = req.body;
    var query = "select * from auth where username=? and password=?";
    connection.query(query, [auth1.username, auth1.password], (err, results) => {
        if (!err) {
            if (results.length===0) {
                return res.status(404).json({ message: "user doesnt exist" });
            }
            return res.status(200).json({ message: "welcome" });
        }
        else {
            return res.status(500).json(err);
        }
    })
})

module.exports = router;