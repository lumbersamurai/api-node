// Importa la instancia de Express con toda la configuracion y las rutas.
const app = require('./app');
// Permite definir el puerto desde el entorno; 3000 se usa en desarrollo.
const PORT = process.env.PORT || 3000;

// Inicia el servidor HTTP y confirma el puerto activo en la consola.
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
