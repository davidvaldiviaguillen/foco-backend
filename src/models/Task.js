const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    default: null,
  },
  title: {
    type: String,
    required: [true, 'El título es obligatorio'],
    trim: true,
    maxlength: [100, 'El título no puede superar 100 caracteres'],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'La descripción no puede superar 500 caracteres'],
    default: '',
  },
  priority: {
    type: String,
    enum: ['baja', 'media', 'alta'],
    default: 'media',
  },
  completed: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
    default: null,
  },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
