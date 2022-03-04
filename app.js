const { create } = require('domain');
let mysql = require('mysql');
const internal = require('stream');
var http = require ('http');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0919',
  database: "test1"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("Amjilttai!");

http.createServer(function(request, response) {
  if(request.url == '/insert') {
    var insertQuery= "INSERT INTO student (name, student_code) VALUES ('Tseku', 'c21io1026')";
 connection.query(insertQuery, function (err, result) {
  if (err) throw err;
  console.log("inserted query!!");
 }); 
  } else if(request.url== '/update') {
    var updateQuery="UPDATE student SET student_code = 'c21io1020' WHERE student_code = 'c21io9190'";
    connection.query(updateQuery, function (err, result) {
     if (err) throw err;
     console.log("updated query!!"); 
    }); 
  }else if(request.url=='/delete') {
    var deleteQuery = "DELETE FROM student WHERE name = 'Tseku' ";
    connection.query(deleteQuery, function (err, result) {
      if (err) throw err;
      console.log("deleted query!!");
    });
  }else if (request.url=='/student') {
    connection.query("SELECT * FROM student ", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  }

}) .listen (8080);
  var deleteQuery = "DELETE FROM student WHERE name = 'Tseku' ";
  connection.query(deleteQuery, function (err, result) {
    if (err) throw err;
    console.log("deleted query!!");
  });
 
 var updateQuery="UPDATE student SET student_code = 'c21io9190' WHERE student_code = 'c21io1020'";
 connection.query(updateQuery, function (err, result) {
  if (err) throw err;
  console.log("updated query!!"); 
 }); 
 connection.query("SELECT * FROM student ", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
}); 
});
