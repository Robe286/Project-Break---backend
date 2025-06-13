const getLoginForm = require('../helpers/getLoginForm.js');
const urlFromDashboard = (req) => req.originalUrl.startsWith('/dashboard');

require('dotenv').config();

const showLoginForm = (req, res) => {
    const adminAuth = urlFromDashboard(req);
    const form = getLoginForm(adminAuth);
    res.send(form);
};

const login = (req, res) => {
    if (req.body.user === process.env.ADMIN_USER && req.body.password === process.env.ADMIN_KEY) {
        req.session.isValid = true;
        res.redirect('/dashboard');
    } else {
        res
        .redirect('/login?error=Usuario y/o contraseña invalidos');
    }
};

const logout = (req, res) => {
    req.session.destroy(() => res.redirect('/login'));
};


module.exports = {
    showLoginForm,
    login,
    logout
};