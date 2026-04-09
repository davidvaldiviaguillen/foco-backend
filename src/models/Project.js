const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: [true, 'El nombre del proyecto es obligatorio'],
    trim: true,
    maxlength: [50, 'El nombre no puede superar 50 caracteres'],
  },
  color: {
    type: String,
    default: '#378ADD',
    match: [/^#[0-9A-Fa-f]{6}$/, 'Color no válido, usa formato hex (#rrggbb)'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
