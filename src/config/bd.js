const mysql = require('mysql2/promise');

// Pool reutilizable de conexiones MySQL; evita abrir una conexion por consulta.
// Las variables de entorno permiten cambiar la configuracion sin editar el codigo.
const pool = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'practica_sql',
});

module.exports = pool;
