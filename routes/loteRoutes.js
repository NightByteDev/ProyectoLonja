const express = require('express');
const router = express.Router();
const loteController = require('../controllers/loteController');

router.get('/', loteController.obtenerLotes);
router.post('/', loteController.crearLote);

module.exports = router;