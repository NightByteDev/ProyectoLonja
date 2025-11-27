const { Tipo } = require('../models/asociaciones');

const obtenerTipos = async (req, res) => {
    try {
        const tipos = await Tipo.findAll();
        res.json(tipos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener tipos' });
    }
};

const crearTipo = async (req, res) => {
    try {
        const nuevoTipo = await Tipo.create(req.body);
        res.json(nuevoTipo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear tipo' });
    }
};

module.exports = {
    obtenerTipos,
    crearTipo
};