const express = require('express');
const router = express.Router();
const especieController = require('../controllers/especieController');

router.get('/', especieController.obtenerEspecies);
router.post('/', especieController.crearEspecie);
router.put('/:id', especieController.actualizarEspecie);
router.delete('/:id', especieController.eliminarEspecie);

module.exports = router;