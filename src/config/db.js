const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://foco_user:Trufa2026@cluster0.qk0ry38.mongodb.net/foco?appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB conectado correctamente');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;