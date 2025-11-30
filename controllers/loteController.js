const { Lote } = require('../models/asociaciones');

const obtenerLotes = async (req, res) => {
    try {
        const lotes = await Lote.findAll();
        res.json(lotes);
    } catch (error) {
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

const actualizarLote = async (req, res) => {
    const { id } = req.params;
    try {
        const lote = await Lote.findByPk(id);
        if (!lote) {
            return res.status(404).json({ error: 'Lote no encontrado' });
        }
        await lote.update(req.body);
        res.json({ mensaje: 'Lote actualizado', lote });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar lote' });
    }
};

const eliminarLote = async (req, res) => {
    try {
        await Lote.destroy({ where: { id_lte: req.params.id } });
        res.json({ message: 'Lote eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'No se puede eliminar (hay productos de este lote)' });
    }
};

module.exports = {obtenerLotes, crearLote, eliminarLote, actualizarLote};