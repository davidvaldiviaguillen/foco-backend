const User = require('../models/User');

const getMe = async (req, res) => {
  res.json(req.user);
};

const updateMe = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'El nombre es obligatorio' });
  }

  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name },
      { new: true, runValidators: true }
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar perfil', error: error.message });
  }
};

module.exports = { getMe, updateMe };
