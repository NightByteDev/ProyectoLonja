const cloudinary = require('cloudinary').v2;
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

// Función para SUBIR
const subirImagen = async (filePath) => {
    try {
        if (!process.env.CLOUDINARY_CLOUD_NAME) {
            throw new Error("Faltan las credenciales de Cloudinary");
        }
        const result = await cloudinary.uploader.upload(filePath, {
            folder: 'lonja_veracruz' 
        });
        return result;
    } catch (error) {
        console.error("Error interno de Cloudinary:", error);
        throw error;
    }
};

const borrarImagen = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        return result;
    } catch (error) {
        console.error("Error al borrar de Cloudinary:", error);
        throw error;
    }
};

module.exports = { subirImagen, borrarImagen };