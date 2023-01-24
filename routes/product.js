const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/create', (req, res, next) => {
    let product = req.body;
    query = "insert into crud (name,price) values(?,?)";
    connection.query(query, [product.name, product.price], (err, results) => {
        if (!err) {
            return res.status(200).json({ message: "product added successfully" });
        }
        else {
            return res.status(500).json(err);
        }
    });
});

router.get('/read', (req, res, next) => {
    var query = "select * from crud";
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    });
});

router.put('/update/:id', (req, res, next) => {
    const id = req.params.id;
    let product = req.body;
    var query = "update crud set name=?,price=? where id=?";
    connection.query(query, [product.name, product.price, id], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "product id doesnt exist" });
            }
            return res.status(200).json({ message: "product updated successfully" });
        }
        else {
            return res.status(500).json(err);
        }
    })
})

router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id;
    var query = "delete from crud where id=?";
    connection.query(query, [id], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "product id doesnt exist" });
            }
            return res.status(200).json({ message: "product deleted successfully" });
        }
        else {
            return res.status(500).json(err);
        }
    })
})

module.exports = router;