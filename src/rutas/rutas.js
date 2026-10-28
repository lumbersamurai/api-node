const express = require('express');
const router = express.Router();

const UsuarioControlador = require('../controlador/usuarioControlador');
 router.get('/', UsuarioControlador.obtenerUsuarios);

 module.exports = router;