const express = require('express');
const router = express.Router();
const tipoController = require('../controllers/tipoController');
router.get('/', tipoController.obtenerTipos);
module.exports = router;

router.get('/', tipoController.obtenerTipos);
router.post('/', tipoController.crearTipo);
router.delete('/:id', tipoController.eliminarTipo);

module.exports = router;