const connection = require("./connection");

const orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, data) {
            if (err) cb(err, null);
            cb (null, data);
        });
    },

    insertOne: function(burgerName, cb) {
        let sqlQuery = `INSERT INTO burgers (burger_name) VALUES ('${burgerName}')`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb (null, data);
        });
    },

    updateOne: function(burgerId, cb) {
        connection.query(`UPDATE burgers SET devoured = true WHERE id = ${burgerId}`, function (err, data) {
            if (err) cb(err, null);
            cb (null, data);
        });
    },

    deleteOne: function(burgerId, cb) {
        connection.query(`DELETE FROM burgers WHERE id = ${burgerId}`, function (err, data) {
            if (err) cb(err, null);
            cb (null, data);
        });
    }
}

module.exports = orm;