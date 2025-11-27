const express = require('express');
const router = express.Router();
const authController = require('../controllers/adminController');

router.post('/login', authController.login);

router.post('/registro', authController.registrarAdmin);

module.exports = router;