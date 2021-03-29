const User = require ('../models/user');
const ensureLogedIn = require('../middlewares/ensure-logged-in')
const express = require('express');
const router = express.Router();

router.use(ensureLogedIn);

router.use(function (req, res, next) {
    res.locals.title = 'Cộng Hai Số';
    next();
});

router.get('/', function(req, res){
    res.render('sum/form')
});

router.post('/', function(req, res){
    const number1 = Number(req.body.number1);
    const number2 = Number(req.body.number2);
    const result = number1 + number2;
    // res.locals.title = 'Tổng Hai Số';
    res.render('sum/result',{number1,number2,result})
});

module.exports = router;