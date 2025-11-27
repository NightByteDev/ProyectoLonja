const express = require('express');
const router = express.Router();
const tipoController = require('../controllers/tipoController');

router.get('/', tipoController.obtenerTipos);
router.post('/', tipoController.crearTipo);

module.exports = router;