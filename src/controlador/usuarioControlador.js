

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
}

module.exports = usuarioControlador;
