const express = require('express');
const router = express.Router();
const compradorController = require('../controllers/compradorController');

router.get('/', compradorController.obtenerCompradores);
router.post('/', compradorController.crearComprador);
router.post('/login', compradorController.login);
router.put('/:id', compradorController.actualizarComprador);
router.delete('/:id', compradorController.eliminarComprador);

module.exports = router;