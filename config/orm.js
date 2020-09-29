var connection = require('./connection');

var orm = {
    // Retrieve everyting from specified table
    selectAll: function(table, response) {
        var queryString = "SELECT * FROM " + table + ";"; 
        connection.query(queryString, function(error, result) {
            if(error) throw error;
            response(result);
        });
    },

    // Insert burger into the table with devoured = false
    insertOne: function(table, value, response) {
        var queryString = "INSERT INTO " + table + " (burger_name, devoured) VALUES (";
        queryString += value + ", false);";
        
        connection.query(queryString, function(error, result) {
            if(error) throw error;
            response(result);
        });
    },

    // Update burger to set devoured = true
    updateOne: function(value, response) {
        var queryString = "UDPATE burgers SET burgers.devoured = false WHERE burgers.burger_name = ";
        queryString += value + ";";

        connection.query(queryString, function(error, result) {
            if(error) throw error;
            response(result);
        });
    }
}



// Export orm modules
module.exports = orm;