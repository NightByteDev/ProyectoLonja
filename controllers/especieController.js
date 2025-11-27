const { Especie, Tipo, Lote } = require('../models/asociaciones');

const obtenerEspecies = async (req, res) => {
    try {
        const especies = await Especie.findAll({
            include: [
                { model: Tipo },
                { model: Lote }
            ]
        });
        res.json(especies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener especies' });
    }
};

const crearEspecie = async (req, res) => {
    try {
        const nuevaEspecie = await Especie.create(req.body);
        res.json(nuevaEspecie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear especie' });
    }
};

module.exports = {
    obtenerEspecies,
    crearEspecie
};