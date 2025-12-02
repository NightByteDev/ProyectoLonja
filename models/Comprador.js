const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Comprador = sequelize.define('Comprador', {
    codigo_cpr: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    apellido_paterno: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    apellido_materno: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    direccion: {
        type: DataTypes.STRING(200),
        allowNull: true
    },
    correo: {
        type: DataTypes.STRING(80),
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    tableName: 'comprador',
    timestamps: false
    
});

module.exports = Comprador;