const router = require('express').Router();
const auth = require('../middleware/auth.middleware');
const { getProjects, createProject, updateProject, deleteProject } = require('../controllers/project.controller');

router.use(auth);

router.get('/', getProjects);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
