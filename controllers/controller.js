var express = require("express");
const burger = require("../models/burger");
var router = express.Router();
var orm = require('../models/burger');

router.get("/", function(request, response) {
    burger.all(function(data) {
        var handlebarObject = {
            burgers: data
        };
        console.log(handlebarObject);
        response.render("index", handlebarObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(
      ["burger_name", "devoured"],
      [req.body.burger_name, req.body.devoured],
      function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

// Export routes for server.js to use.
module.exports = router;