
const EmpleadosModelo = require('../modelo/empleadosModelo');

class EmpleadosControlador 
{
    static async obtenerEmpleados(req, res) 
    {
        try 
        {
            const empleados = await EmpleadosModelo.obtenerTodos();
            return res.status(200).json({ exito: true, data: empleados });
        }
        catch (error) 
        {
            return res.status(500).json({ exito: false, mensaje: 'Error al obtener los empleados' });
        }
    }
}
module.exports = EmpleadosControlador;