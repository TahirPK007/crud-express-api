const mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "tahirpk",
    password: "root",
    database: "tahir"
});


connection.connect((err) => {
    if (!err) {
        console.log("connected");
    }
    else {
        console.log(err);
    }
});

module.exports = connection;