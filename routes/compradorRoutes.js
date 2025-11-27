const express = require('express');
const router = express.Router();
const compradorController = require('../controllers/compradorController');

router.get('/', compradorController.obtenerCompradores);

router.post('/', compradorController.crearComprador);

module.exports = router;