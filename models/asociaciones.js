const Tipo = require('./Tipo');
const Lote = require('./Lote');
const Comprador = require('./Comprador');
const Especie = require('./Especie');
const Compra = require('./Compra');

// Relación: Un Tipo tiene muchas Especies
Tipo.hasMany(Especie, { foreignKey: 'id_tpo' });
Especie.belongsTo(Tipo, { foreignKey: 'id_tpo' });

// Relación: Un Lote tiene muchas Especies
Lote.hasMany(Especie, { foreignKey: 'id_lte' });
Especie.belongsTo(Lote, { foreignKey: 'id_lte' });

// Relación: Un Comprador hace muchas Compras
Comprador.hasMany(Compra, { foreignKey: 'codigo_cpr' });
Compra.belongsTo(Comprador, { foreignKey: 'codigo_cpr' });

// Relación: Un Lote puede estar en muchas Compras
Lote.hasMany(Compra, { foreignKey: 'id_lte' });
Compra.belongsTo(Lote, { foreignKey: 'id_lte' });

module.exports = {
    Tipo,
    Lote,
    Comprador,
    Especie,
    Compra
};