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
        const nuevoUsuario = {
            id: usuarios.length + 1,
            nombre: datos.nombre,
            email: datos.email
        };
        usuarios.push(nuevoUsuario);
        return nuevoUsuario;
    }

    static actualizar(id, datos) {
        const usuario = this.obtenerUsuarioPorId(id); // Reutilizamos el metodo para obtener el usuario por id
        if (!usuario) return null;

        // Actualizamos los campos del usuario
        usuario.nombre = datos.nombre || usuario.nombre;
        usuario.correo = datos.correo || usuario.correo;
        return usuario;
    }
}

module.exports = UsuarioModelo;
