var express = require("express");
const burger = require("../models/burger");
var router = express.Router();
var orm = require('../models/burger');

// Retrieve all burgers from db
router.get("/", function(request, response) {
    burger.all(function(data) {
        var handlebarObject = {
            burgers: data
        };
        console.log(handlebarObject);
        response.render("index", handlebarObject);
    });
});

// Add a burger to the db
router.post("/api/burgers", function(req, res) {
    burger.create(
      ["burger_name", "devoured"],
      [req.body.burger_name, req.body.devoured],
      function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

// Update devoured state of burger in db
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
  
    burger.update({
      burger_name: req.body.burger_name
    }, function(result) {
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