const connection = require("../config/connection.js");

let orm = {
    all: function(table, callback){

        let query = "SELECT * FROM " + table + ";";
        connection.query(query, function(err, results){
            if (err) {throw err;};
            callback(results);
        })

    },
    insert: function(table, name, callback){

        let query = "INSERT INTO " + table + " (name) VALUES " + "('" +name+ "')";
        connection.query(query, function(err, results){
            if (err) {throw err;};
            callback(results);
        })

    },
    update: function(table, devoured, id, callback){

        let query = "UPDATE " + table + " SET devoured='" + devoured + "' WHERE id='" + id + "'";
        connection.query(query, function(err, results){
            if (err) {throw err;};
            callback(results);
        });

    }
}
  
  module.exports = orm;