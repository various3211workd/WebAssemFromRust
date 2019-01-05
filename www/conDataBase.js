/*
docker run --name=mysql1 -d -p 3306:3306 mysql/mysql-server

*/
var mysql = require('mysql');
var connection = mysql.createConnection({
    host        : "192.168.10.107",
    port        : 3306,
    user        : "todo",
    password    : "password",
    database    : "js_app",
});

connection.connect(function(err) {
    if(err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

connection.query({
    sql: 'SELECT * FROM users',
    timeout: 40000, // 40s
}, function (error, results, fields) {
    console.log(error);
    console.log(results);
    console.log(fields);
});

connection.destroy();