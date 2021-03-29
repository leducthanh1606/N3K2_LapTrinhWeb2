module.exports = function ensureLogedIn(req, res, next) {
    if (!req.currentUser) {
        res.redirect('/auth/login');
    }
    else {
        next();
    }
};