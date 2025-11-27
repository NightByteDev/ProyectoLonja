const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Compra = sequelize.define('Compra', {
    id_cmp: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    precio_kilo_final: {
        type: DataTypes.DECIMAL(10, 2),
    },
    precio_total: {
        type: DataTypes.DECIMAL(10, 2),
    },
    // Llaves foráneas
    codigo_cpr: {
        type: DataTypes.SMALLINT,
        references: {
            model: 'comprador',
            key: 'codigo_cpr'
        }
    },
    id_lte: {
        type: DataTypes.INTEGER,
        references: {
            model: 'lote',
            key: 'id_lte'
        }
    }
}, {
    tableName: 'compra',
    timestamps: false
});

module.exports = Compra;