const { Administrador } = require('../models/asociaciones');

const login = async (req, res) => {
    const { correo, password } = req.body;

    try {
        const admin = await Administrador.findOne({ where: { correo } });

        if (!admin) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        if (admin.password !== password) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        res.json({ 
            mensaje: 'Login exitoso', 
            usuario: { nombre: admin.nombre, id: admin.id_admin, rol: 'admin' }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const registrarAdmin = async (req, res) => {
    try {
        const nuevoAdmin = await Administrador.create(req.body);
        res.json(nuevoAdmin);
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar administrador' });
    }
};

module.exports = { login, registrarAdmin };