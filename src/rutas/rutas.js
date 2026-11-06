const express = require('express');
const router = express.Router();

// Los controladores contienen la logica; este modulo solo declara el contrato HTTP.
const UsuarioControlador = require('../controlador/usuarioControlador');
// GET /api/ -> lista todos los usuarios.
 router.get('/', UsuarioControlador.obtenerUsuarios);

// GET /api/:id -> obtiene un usuario por identificador.
 router.get('/:id', UsuarioControlador.obtenerUsuarioPorId);

// POST /api/ -> crea; PUT /api/:id -> actualiza; DELETE /api/:id -> elimina.
 router.post('/', UsuarioControlador.crear);
 router.put('/:id', UsuarioControlador.actualizar);
router.delete('/:id', UsuarioControlador.eliminar);
 module.exports = router;
