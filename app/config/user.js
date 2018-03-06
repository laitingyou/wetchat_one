var mysql=require('mysql');
var db=require('./db');
db.query('Select * from users where 1',function (err, result) {
    console.log(result)
})