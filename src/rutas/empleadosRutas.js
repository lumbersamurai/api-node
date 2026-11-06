const express = require('express');
const router = express.Router();
const EmpleadosControlador = require('../controlador/empleadosControlador');


router.get('/', EmpleadosControlador.obtenerEmpleados);

module.exports = router;
