const express = require('express');
const User = require('../models/user');
const bcrypt  = require('bcrypt');


const router = express.Router();


router.use(function(req, res,next){
    res.locals.title = 'Đăng Nhập';
    next();
});

router.get('/login', function (req, res) {    
    res.render('auth/login');
});

router.post('/login', function (req, res) {
    const { email, password } = req.body;
    const found = User.findByEmail(email);
    //hash password
    if (found && bcrypt.compareSync(password ,found.password)) {
        req.session.userID = found.id;
        res.redirect('/');
    } else {
        res.render('auth/login');
    }

});

router.get('/logout', function(req, res){
    delete  req.session.userID;
    res.redirect('/');
});

module.exports = router;