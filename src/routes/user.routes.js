const router = require('express').Router();
const auth = require('../middleware/auth.middleware');
const { getMe, updateMe } = require('../controllers/user.controller');

router.use(auth);

router.get('/me', getMe);
router.put('/me', updateMe);

module.exports = router;
