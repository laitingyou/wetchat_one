var apiRouter=require('express').Router();
var db=require('../../config/db');

apiRouter.get('/get', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    db.query('Select * from users where 1',function (err, result) {
        // console.log(result)
        res.send(result);
    })
    // res.send()
});
module.exports=apiRouter;