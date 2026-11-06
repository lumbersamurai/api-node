
const UsuarioModelo = require('../modelo/usuarioModelo');

class usuarioControlador 
{

    // Coordina el listado y devuelve un sobre de respuesta uniforme.
    static obtenerUsuarios(req, res) 
    {
        return res.status(200).json({
            exito: true,
            mensaje: 'Usuarios obtenidos correctamente',
            usuarios: UsuarioModelo.obtenerUsuarios()
        });
    }

    // Busca el usuario indicado por URL y responde 404 si no existe.
    static obtenerUsuarioPorId(req, res)
    {
        const id = req.params.id;
        const usuario = UsuarioModelo.obtenerUsuarioPorId(id);
        if (!usuario) 
        {
            return res.status(404).json({
                exito: false,
                mensaje: 'Usuario no encontrado'
            });
        }
        return res.status(200).json({
            exito: true,
            mensaje: 'Usuario obtenido correctamente',
            usuario: usuario
        });
    }

    // Valida los campos minimos antes de delegar la creacion al modelo.
    static crear(req, res)
    {
        const {nombre, correo} = req.body;
        if (!nombre || !correo) 
        {
            return res.status(400).json({
                exito: false,
                mensaje: 'Faltan datos para crear el usuario'
            });
        }
        const nuevoUsuario = UsuarioModelo.crear({nombre, correo});
        return res.status(201).json({
            exito: true,
            mensaje: 'Usuario creado correctamente',
            usuario: nuevoUsuario
        });
    }


    // Delega la actualizacion y distingue entre exito y usuario inexistente.
    static actualizar(req, res)
        
    {
        const usuarioActualizado = UsuarioModelo.actualizar(req.params.id, req.body);
        if (!usuarioActualizado) 
        {
            return res.status(404).json({ exito: false, mensaje: 'Usuario no encontrado' });
        } 
        res.status(200).json({ exito: true, datos: usuarioActualizado});
            
        }
    // Elimina el usuario solicitado y confirma el resultado de la operacion.
    static eliminar(req, res)
    {
        const eliminado = UsuarioModelo.eliminar(req.params.id);
        if (!eliminado) 
        {
            return res.status(404).json({ exito: false, mensaje: 'Usuario no encontrado' });
        }
        res.status(200).json({ exito: true, mensaje: 'Usuario eliminado correctamente' });
    }
}

module.exports = usuarioControlador;
