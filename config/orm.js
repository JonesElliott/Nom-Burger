var connection = require('./connection');

var orm = {
    selectAll: function(table, response) {
        var queryString = "SELECT * FROM " + table + ";"; 
        connection.query(queryString, function(error, result) {
            if(error) throw error;
            response(result);
        });
    },

    insertOne: function() {
        
    },

    updateOne: function() {
        
    }
}



// Export orm modules
module.exports = orm;