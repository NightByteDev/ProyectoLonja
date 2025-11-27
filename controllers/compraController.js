const { Compra, Comprador, Lote } = require('../models/asociaciones');

const obtenerCompras = async (req, res) => {
    try {
        const compras = await Compra.findAll({
            include: [
                { model: Comprador },
                { model: Lote }
            ]
        });
        res.json(compras);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener compras' });
    }
};

const crearCompra = async (req, res) => {
    try {
        const nuevaCompra = await Compra.create(req.body);
        res.json(nuevaCompra);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al registrar la compra' });
    }
};

module.exports = {
    obtenerCompras,
    crearCompra
};