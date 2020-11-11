// import express
const express = require("express");

const router = express.Router();

// Import the model to use its database functions.
const burger = require("../models/burger.js");

// Create all the routes and set up logic within those routes where required.
// do the get
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        // get the data as an object for handlebars 
        let hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// do the post
router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name"], [req.body.name], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

// do the put
router.put("/api/burgers/:id", function (req, res) {
    burger.updateOne({
        id: req.params.id,
        devoured: (req.body.devoured) ? 1 : 0
    }, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;