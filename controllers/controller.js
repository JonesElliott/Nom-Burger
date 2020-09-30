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










// Export routes for server.js to use.
module.exports = router;