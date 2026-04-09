const router = require('express').Router();
const auth = require('../middleware/auth.middleware');
const { getTasks, getTodayTasks, getTasksByProject, createTask, updateTask, toggleTask, deleteTask } = require('../controllers/task.controller');

router.use(auth);

router.get('/', getTasks);
router.get('/today', getTodayTasks);
router.get('/project/:id', getTasksByProject);
router.post('/', createTask);
router.put('/:id', updateTask);
router.put('/:id/toggle', toggleTask);
router.delete('/:id', deleteTask);

module.exports = router;
