const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Tipo = sequelize.define('Tipo', {
    id_tpo: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
}, {

    tableName: 'tipo',
    timestamps: false
});

module.exports = Tipo;