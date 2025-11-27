const { Comprador } = require('../models/asociaciones');

const obtenerCompradores = async (req, res) => {
    try {
        const compradores = await Comprador.findAll();
        res.json(compradores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los compradores' });
    }
};

const crearComprador = async (req, res) => {
    try {
        const nuevoComprador = await Comprador.create(req.body);
        res.json(nuevoComprador);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear comprador' });
    }
};

module.exports = {
    obtenerCompradores,
    crearComprador
};