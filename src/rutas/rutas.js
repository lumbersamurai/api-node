const express = require('express');
const router = express.Router();

const UsuarioControlador = require('../controlador/usuarioControlador');
 router.get('/', UsuarioControlador.obtenerUsuarios);

 router.get('/:id', UsuarioControlador.obtenerUsuarioPorId);

 router.post('/', UsuarioControlador.crear);
 router.put('/:id', UsuarioControlador.actualizar);
router.delete('/:id', UsuarioControlador.eliminar);
 module.exports = router;