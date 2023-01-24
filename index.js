const express = require('express');
const connection = require("./connection")
const productRoute = require('./routes/product');
const authRoute = require('./routes/auth');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/product', productRoute)
app.use('/auth', authRoute)


module.exports = app;