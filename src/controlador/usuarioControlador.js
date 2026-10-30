

const UsuarioModelo = require('../modelo/usuarioModelo');

class usuarioControlador 
{

    static obtenerUsuarios(req, res) 
    {
        return res.status(200).json({
            exito: true,
            mensaje: 'Usuarios obtenidos correctamente',
            usuarios: UsuarioModelo.obtenerUsuarios()
        });
    }

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
}

module.exports = usuarioControlador;
