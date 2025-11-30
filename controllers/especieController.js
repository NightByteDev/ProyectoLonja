const { Especie, Tipo, Lote } = require('../models/asociaciones');
const { subirImagen, borrarImagen } = require('../utils/cloudinary');
const fs = require('fs'); 

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
        const { nombre, id_tpo, id_lte } = req.body;
        let imagenUrl = null;

        if (req.files && req.files.imagen) {
            const archivo = req.files.imagen;
            const resultado = await subirImagen(archivo.tempFilePath);
            imagenUrl = resultado.secure_url; 

            fs.unlink(archivo.tempFilePath, (err) => {
                if (err) console.error("Error al borrar temp:", err);
            });
        }

        const nuevaEspecie = await Especie.create({
            nombre,
            id_tpo,
            id_lte,
            imagen: imagenUrl 
        });

        res.json(nuevaEspecie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear especie' });
    }
};

const actualizarEspecie = async (req, res) => {
    const { id } = req.params; 
    try {
        const especie = await Especie.findByPk(id);
        
        if (!especie) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        let nuevaImagenUrl = especie.imagen;

        if (req.files && req.files.imagen) {
        
            if (especie.imagen && especie.imagen.includes('cloudinary')) {
                const nombreArr = especie.imagen.split('/');
                const nombre = nombreArr[nombreArr.length - 1];
                const [public_id] = nombre.split('.');
                await borrarImagen(`lonja_veracruz/${public_id}`);
            }

            const archivo = req.files.imagen;
            const resultado = await subirImagen(archivo.tempFilePath);
            nuevaImagenUrl = resultado.secure_url;

            fs.unlink(archivo.tempFilePath, (err) => { if (err) console.error(err); });
        }

        await especie.update({
            ...req.body,
            imagen: nuevaImagenUrl 
        });
        
        res.json({ mensaje: 'Producto actualizado correctamente', especie });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};


const eliminarEspecie = async (req, res) => {
    const { id } = req.params;
    try {
    
        const especie = await Especie.findByPk(id);

        if (!especie) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        if (especie.imagen && especie.imagen.includes('cloudinary')) {
            const nombreArr = especie.imagen.split('/');
            const nombre = nombreArr[nombreArr.length - 1];
            const [public_id] = nombre.split('.');
            
            await borrarImagen(`lonja_veracruz/${public_id}`);
        }

        await especie.destroy();

        res.json({ mensaje: 'Producto e imagen eliminados correctamente' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'No se puede eliminar (probablemente ya tiene ventas asociadas)' });
    }
};

module.exports = {obtenerEspecies, crearEspecie, actualizarEspecie, eliminarEspecie};