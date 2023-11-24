const { Router } = require('express');
const router = Router();
const authController = require('../controllers/authController.js')

// Signup side : 

router.get('/signup', authController.signup_get);
router.post('/signup', authController.login_post);

//  Login side :
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);

module.exports = router;