module.exports = function authentication (req, res, next) {
    if (req.session && req.session.isValid) {
        return next();
    }
    res.redirect('/login?error=Acess denied');
};