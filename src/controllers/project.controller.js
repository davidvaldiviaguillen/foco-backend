const Project = require('../models/Project');
const Task = require('../models/Task');

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener proyectos', error: error.message });
  }
};

const createProject = async (req, res) => {
  const { name, color } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'El nombre del proyecto es obligatorio' });
  }

  try {
    const project = await Project.create({ user: req.user._id, name, color });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear proyecto', error: error.message });
  }
};

const updateProject = async (req, res) => {
  const { name, color } = req.body;

  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { name, color },
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar proyecto', error: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }

    await Task.deleteMany({ project: req.params.id });

    res.json({ message: 'Proyecto y sus tareas eliminados correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar proyecto', error: error.message });
  }
};

module.exports = { getProjects, createProject, updateProject, deleteProject };
