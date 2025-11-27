const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Especie = sequelize.define('Especie', {
    id_epe: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(25),
        allowNull: true
    },
    imagen: {
        type: DataTypes.STRING(100),
        allowNull: true
    },

    id_lte: {
        type: DataTypes.INTEGER,
        references: {
            model: 'lote',
            key: 'id_lte'
        }
    },
    id_tpo: {
        type: DataTypes.SMALLINT,
        references: {
            model: 'tipo',
            key: 'id_tpo'
        }
    }
}, {
    tableName: 'especie',
    timestamps: false
});

module.exports = Especie;