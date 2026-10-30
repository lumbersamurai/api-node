let usuarios = [
    { id: 1, nombre: 'Daniel Araiza', email: 'lumberlol50@gmail.com' },
    { id: 2, nombre: 'Juan Perez', email: 'juanperez@gmail.com' },
    { id: 3, nombre: 'Maria Lopez', email: 'marialopez@gmail.com' }
]
class UsuarioModelo {
    static obtenerUsuarios() {
        return usuarios;
    }

    static obtenerUsuarioPorId(id) {
        return usuarios.find(u => u.id === parseInt(id));
    }

    static crear(datos) {
        const nuevoUsuario = { id: usuarios.length + 1, 
            nombre: datos.nombre,
            email: datos.email 
        };
        usuarios.push(nuevoUsuario);
        return nuevoUsuario;
    }
}

module.exports = UsuarioModelo;
