const express = require('express');
const cors = require('cors');
const sequelize = require('./config/config'); 
require('./models/asociaciones'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/compradores', require('./routes/compradorRoutes'));
app.use('/api/lotes', require('./routes/loteRoutes'));
app.use('/api/tipos', require('./routes/tipoRoutes'));
app.use('/api/especie', require('./routes/especieRoutes'));
app.use('/api/compra', require('./routes/compraRoutes'));

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Base de datos conectada correctamente.');

        app.listen(port);
    } catch (error) {
        console.error('Error de conexión:', error);
    }
}

main();