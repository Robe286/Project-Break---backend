const express = require('express');
const router = express.Router();
const { showLoginForm, login, logout } = require('../controllers/authController.js');

router.get('/login', showLoginForm);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;