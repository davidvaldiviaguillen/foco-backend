const mongoose = require('mongoose');
// Requerimos dotenv por si acaso lo necesitas para pruebas locales
require('dotenv').config(); 

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  // 1. Verificación dura antes de conectar
  if (!uri) {
    console.error('❌ ERROR CRÍTICO: La variable MONGO_URI no está definida en el entorno.');
    process.exit(1);
  }

  // 2. Verificación de formato (comprueba si le pusiste comillas sin querer en Railway)
  if (uri.startsWith('"') || uri.startsWith("'")) {
    console.error('❌ ERROR CRÍTICO: La variable MONGO_URI tiene comillas. Quítaselas en el panel de Railway.');
    process.exit(1);
  }

  try {
    // Si pasamos las validaciones, conectamos
    await mongoose.connect(uri);
    console.log('✅ MongoDB conectado correctamente de forma segura');
  } catch (error) {
    console.error('❌ Error al conectar con MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;