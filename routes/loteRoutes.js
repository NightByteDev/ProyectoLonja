const express = require('express');
const router = express.Router();
const loteController = require('../controllers/loteController');

router.get('/', loteController.obtenerLotes);
router.post('/', loteController.crearLote);
router.put('/:id', loteController.actualizarLote);
router.delete('/:id', loteController.eliminarLote);

module.exports = router;