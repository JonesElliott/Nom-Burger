var orm = require('../config/orm');

var burger = {
    // Search all from burgers table
    all: function(response) {
        orm.selectAll("burgers", function(result) {
            response(result);
        });
    },

    // Create burger in burgers table
    create: function(value, response) {
        orm.insertOne("burgers", value, function(result) {
            response(result);
        });
    },

    

}

module.exports = burger;