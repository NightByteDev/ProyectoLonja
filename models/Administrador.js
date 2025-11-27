const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Administrador = sequelize.define('Administrador', {
    id_admin: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50)
    },
    correo: {
        type: DataTypes.STRING(80),
        unique: true
    },
    password: {
        type: DataTypes.STRING(100)
    }
}, {
    tableName: 'administrador',
    timestamps: false
});

module.exports = Administrador;