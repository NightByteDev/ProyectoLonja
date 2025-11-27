const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Lote = sequelize.define('Lote', {
    id_lte: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    kilos: {
        type: DataTypes.DECIMAL(10, 2),
    },
    numero_cajas: {
        type: DataTypes.SMALLINT,
    },
    precio_kilo_salida: {
        type: DataTypes.DECIMAL(10, 2),
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'lote',
    timestamps: false
});

module.exports = Lote;