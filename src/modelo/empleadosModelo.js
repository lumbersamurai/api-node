const pool = require('../config/bd');

class EmpleadosModelo {

    static async obtenerTodos() 
    {
        const [rows] = await pool.query('SELECT * FROM empleados');
        return rows;
    }
    
}
module.exports = EmpleadosModelo;
