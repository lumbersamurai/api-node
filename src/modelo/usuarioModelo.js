let usuarios = [
    { id: 1, nombre: 'Daniel Araiza', email: 'lumberlol50@gmail.com' },
    { id: 2, nombre: 'Juan Perez', email: 'juanperez@gmail.com' },
    { id: 3, nombre: 'Maria Lopez', email: 'marialopez@gmail.com' }
]
class UsuarioModelo {
    static obtenerUsuarios() {
        return usuarios;
    }

    // Normaliza el id recibido por ruta antes de buscar el usuario.
    static obtenerUsuarioPorId(id) {
        return usuarios.find(u => u.id === parseInt(id));
    }

    // Crea y guarda un usuario con un id basado en el tamano actual del arreglo.
    static crear(datos) {
        const nuevoUsuario = {
            id: usuarios.length + 1,
            nombre: datos.nombre,
            email: datos.email
        };
        usuarios.push(nuevoUsuario);
        return nuevoUsuario;
    }

    // Actualiza solo los campos presentes y conserva los valores existentes.
    static actualizar(id, datos) {
        const usuario = this.obtenerUsuarioPorId(id); // Reutilizamos el metodo para obtener el usuario por id
        if (!usuario) return null;

        // Actualizamos los campos del usuario
        usuario.nombre = datos.nombre || usuario.nombre;
        usuario.correo = datos.correo || usuario.correo;
        return usuario;
    }

    // Elimina por indice para modificar el arreglo original.
    static eliminar(id) 
    {
        const indice = usuarios.findIndex(u => u.id === parseInt(id));
        if (indice === -1) return false; //Usuario no encontrado
        
        usuarios.splice(indice, 1);
        return true; //Usuario eliminado correctamente
    }
}

module.exports = UsuarioModelo;
