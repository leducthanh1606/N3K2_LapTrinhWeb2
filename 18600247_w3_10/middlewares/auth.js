const User = require ('../models/user');

module.exports = function(req, res, next){
    const  {userID} = req.session;
    res.locals.currentUser = null;
    if(userID){
        const user = User.findByID(userID);
        if(user){
            req.currentUser = user;
            res.locals.currentUser = user;
        }
    }
    next();
};