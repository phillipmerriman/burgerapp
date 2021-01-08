// set up mysql connection
const mysql = require("mysql");

//set up connection to work with Heroku
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        // port: 3306,
        user: "root",
        password: "vegetable",
        database: "burgers_db"
    });
}

// Make connection
connection.connect ((err) => {
    if (err) {
        console.error("error encoding: " + err.stack);
    }

    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;