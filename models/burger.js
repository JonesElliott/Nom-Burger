var orm = require('../config/orm');

var burger = {
    // Search all from burgers table
    all: function(response) {
        orm.selectAll("burgers", function(result) {
            response(result);
        });
    },


    create: function(cols, vals, callBack) {
        orm.insertOne("burgers", cols, vals, function(res) {
          callBack(res);
        });
    },

    // Update burger to devoured
    update: function(value, response) {
        orm.updateOne(value, function(result) {
            response(result);
        });
    }
}

module.exports = burger;