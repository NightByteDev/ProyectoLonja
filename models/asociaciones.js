const Tipo = require('./Tipo');
const Lote = require('./Lote');
const Comprador = require('./Comprador');
const Especie = require('./Especie');
const Compra = require('./Compra');
const Administrador = require('./Administrador'); 

//Definir las Relaciones

// Tipo -> Especie
Tipo.hasMany(Especie, { foreignKey: 'id_tpo' });
Especie.belongsTo(Tipo, { foreignKey: 'id_tpo' });

// Lote -> Especie
Lote.hasMany(Especie, { foreignKey: 'id_lte' });
Especie.belongsTo(Lote, { foreignKey: 'id_lte' });

// Comprador -> Compra
Comprador.hasMany(Compra, { foreignKey: 'codigo_cpr' });
Compra.belongsTo(Comprador, { foreignKey: 'codigo_cpr' });

// Lote -> Compra
Lote.hasMany(Compra, { foreignKey: 'id_lte' });
Compra.belongsTo(Lote, { foreignKey: 'id_lte' });

module.exports = {
    Tipo,
    Lote,
    Comprador,
    Especie,
    Compra,
    Administrador
};