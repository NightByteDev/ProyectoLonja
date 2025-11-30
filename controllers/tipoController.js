const { Tipo } = require('../models/asociaciones');

const obtenerTipos = async (req, res) => {
    try {
        const tipos = await Tipo.findAll();
        res.json(tipos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener tipos' });
    }
};

const crearTipo = async (req, res) => {
    try {
        const nuevoTipo = await Tipo.create(req.body);
        res.json(nuevoTipo);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear tipo' });
    }
};

const eliminarTipo = async (req, res) => {
    try {
        await Tipo.destroy({ where: { id_tpo: req.params.id } });
        res.json({ message: 'Tipo eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'No se puede eliminar (está en uso por un producto)' });
    }
};

module.exports = {obtenerTipos, crearTipo, eliminarTipo};