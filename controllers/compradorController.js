const { Comprador, Compra } = require('../models/asociaciones');

const obtenerCompradores = async (req, res) => {
    try {
        const compradores = await Comprador.findAll({
            order: [['codigo_cpr', 'ASC']]
        });
        res.json(compradores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener compradores' });
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

const login = async (req, res) => {
    const { correo, password } = req.body;
    try {
        const usuario = await Comprador.findOne({ where: { correo } });
        
        if (!usuario) {
            return res.status(404).json({ error: 'Comprador no encontrado' });
        }
        
        if (usuario.password !== password) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        res.json({ 
            mensaje: `Hola ${usuario.nombre}`, 
            usuario: { 
                id: usuario.codigo_cpr, 
                nombre: usuario.nombre, 
                rol: 'comprador' 
            } 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en el servidor al intentar entrar' });
    }
};

const actualizarComprador = async (req, res) => {
    const { id } = req.params; 
    console.log("Intentando actualizar ID:", id);
    
    const { nombre, apellido_paterno, apellido_materno, direccion, correo, password } = req.body;

    try {
        const comprador = await Comprador.findByPk(id);
        if (!comprador) {
            return res.status(404).json({ error: 'Comprador no encontrado' });
        }

        await comprador.update({
            nombre, 
            apellido_paterno, 
            apellido_materno, 
            direccion, 
            correo,
            password
        });

        console.log("Actualización exitosa");
        res.json({ mensaje: 'Comprador actualizado correctamente', comprador });

    } catch (error) {
        console.error("Error al actualizar:", error);
        res.status(500).json({ error: 'Error al actualizar: ' + error.message });
    }
};

const eliminarComprador = async (req, res) => {
    const { id } = req.params;
    console.log("Intentando eliminar ID:", id);

    try {
        if (!Compra || !Comprador) {
            throw new Error("Los modelos Compra o Comprador no están cargados correctamente.");
        }

        await Compra.destroy({
            where: { codigo_cpr: id }
        });

        const resultado = await Comprador.destroy({
            where: { codigo_cpr: id }
        });

        if (resultado === 0) {
            return res.status(404).json({ error: 'Comprador no encontrado' });
        }

        console.log("Eliminación exitosa");
        res.json({ mensaje: 'Comprador y su historial eliminados correctamente' });

    } catch (error) {
        console.error("Error al eliminar:", error);
        res.status(500).json({ error: 'Error crítico (Código Nuevo): ' + error.message });
    }
};

module.exports = {obtenerCompradores, crearComprador, login, actualizarComprador, eliminarComprador};