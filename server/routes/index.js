var express = require('express');
var router = express.Router();


module.exports = function (passport) {
    /* GET home page. */
    // router.get('/', function(req, res, next) {
    //     console.log('hi');
    //     res.render('index', { title: 'Express' });
    // });

    // router.get('/signUp', function(req, res, next) {
    //     console.log('hi');
    //     res.render('index', { title: 'ExpressAnkit' });
    // });
    //
    // router.post('/signUp', function(req, res, next) {
    //     console.log('hi1');
    //     res.render('index', { title: 'ExpressAnkit1' });
    // });

    router.post('/signup', passport.authenticate('local-signup'), (req, res) => {
        res.sendStatus(200);
    });

    return router;
};
