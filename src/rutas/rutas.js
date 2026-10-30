const express = require('express');
const router = express.Router();

const UsuarioControlador = require('../controlador/usuarioControlador');
 router.get('/', UsuarioControlador.obtenerUsuarios);

 router.get('/:id', UsuarioControlador.obtenerUsuarioPorId);

 router.post('/', UsuarioControlador.crear);

 module.exports = router;