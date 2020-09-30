var connection = require('./connection');

// Iterates over resquest and inserts question marks fo the amount of elements
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
}

var orm = {
    // Retrieve everyting from specified table
    selectAll: function(table, response) {
        var queryString = "SELECT * FROM " + table + ";"; 
        connection.query(queryString, function(error, result) {
            if(error) throw error;
            response(result);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    },

    // Update burger to set devoured = true
    updateOne: function(value, response) {
        var queryString = "UPDATE burgers SET burgers.devoured = 1 WHERE burgers.burger_name = ";
        queryString += '"' + value.burger_name + '";';

        console.log(queryString);

        connection.query(queryString, function(error, result) {
            if(error) throw error;
            response(result);
        });
    }
}

// Export orm modules
module.exports = orm;