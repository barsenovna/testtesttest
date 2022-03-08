const express = require('express'); //импортирование модуля express
const mysql = require('mysql'); // импортирование библиотеки  mysql
const app = express();


var connection = mysql.createConnection({
    // атрибуты
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sql_school'
})

connection.connect(function(error) {
    if(error) {
        console.log('Error')
        console.log(error)
    } else {
        console.log('Success!')
    }
})

app.get('/', function(req,res) {
    connection.query("SELECT * FROM students WHERE city = 'Astana' ", function(error, rows){
        if(error) {
            console.log(error)
        } else {
            console.log('DATA SUCCESSFULLY FETCHED');
            console.log(rows)
            res.send(rows)
        }
    })
})


// PORT
const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log(`Listening on port ${port}...`);
})

