const { Compra, Comprador, Lote, Especie, Tipo } = require('../models/asociaciones');

const obtenerCompras = async (req, res) => {
    try {
        const compras = await Compra.findAll({
            include: [
                { 
                    model: Comprador 
                }, 
                { 
                    model: Lote,     
                    include: [
                        {
                            model: Especie, 
                            include: [
                                { model: Tipo } 
                            ]
                        }
                    ]
                }       
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

const eliminarCompra = async (req, res) => {
    const { id } = req.params;
    try {
        const resultado = await Compra.destroy({
            where: { id_cmp: id }
        });

        if (resultado === 0) {
            return res.status(404).json({ error: 'Compra no encontrada' });
        }

        res.json({ mensaje: 'Registro de venta eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar la compra' });
    }
};

module.exports = {obtenerCompras, crearCompra, eliminarCompra};