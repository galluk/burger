// Import MySQL connection.
const connection = require("./connection.js");

// Object for all the SQL statement functions.
const orm = {
    // selectAll - return all data from the given table
    selectAll: function (table, cb) {
        var queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // insertOne()
    insertOne: function (table, cols, vals, cb) {
        // cols and vals are arrays. Need cols toString for the INTO and a '?' in the VALUES for each col
        var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${Array(cols.length).fill('?')});`;

        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // update - at this stage only updating devoured
    updateOne: function (table, objColVals, cb) {
        var queryString = "UPDATE " + table + " SET devoured = ? WHERE id = ?";
        connection.query(queryString, [parseInt(objColVals.devoured), parseInt(objColVals.id)], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

};

// Export the orm object for the model (cat.js).
module.exports = orm;