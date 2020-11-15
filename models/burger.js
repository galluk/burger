// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

// the callback methods come from the burger_controller
const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, cb) {
        orm.updateOne("burgers", objColVals, function (res) {
            cb(res);
        });
    },
    resetAll: function (cb) {
        orm.resetAll("burgers", function (res) {
            cb(res);
        });
    },
};

// Export the database functions for the controller
module.exports = burger;