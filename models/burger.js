var orm = require('../config/orm');

var burger = {
    all: function(response) {
        orm.selectAll("burgers", function(result) {
            response(result);
        });
    },

    create: function(vale, response) {
        
    }
}

module.exports = burger;