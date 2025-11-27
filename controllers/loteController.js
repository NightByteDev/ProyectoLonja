const { Lote } = require('../models/asociaciones');

const obtenerLotes = async (req, res) => {
    try {
        const lotes = await Lote.findAll();
        res.json(lotes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener lotes' });
    }
};

const crearLote = async (req, res) => {
    try {
        const nuevoLote = await Lote.create(req.body);
        res.json(nuevoLote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear lote' });
    }
};

module.exports = {
    obtenerLotes,
    crearLote
};