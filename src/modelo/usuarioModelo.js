let usuarios = [
    { id: 1, nombre: 'Daniel Araiza', email: 'lumberlol50@gmail.com' }
]

class UsuarioModelo {
    static obtenerUsuarios() {
        return usuarios;
    }
} 

module.exports = UsuarioModelo;
