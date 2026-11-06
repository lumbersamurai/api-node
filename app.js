const express = require('express');
const router = require('./src/rutas/rutas');
// Router de empleados; el nombre coincide con el archivo existente.
const empleadosRouter = require('./src/rutas/empleadosRutas');

// La aplicacion se exporta para poder iniciarla desde index.js o probarla aparte.
const app = express();

// Convierte automaticamente los cuerpos JSON de las peticiones en req.body.
app.use(express.json());

app.use('/api/empleados', empleadosRouter);
app.use('/api/', router);

module.exports = app;
