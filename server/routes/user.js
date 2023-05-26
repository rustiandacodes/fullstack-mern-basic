const express = require('express');

// controller function
const router = express.Router();

const { signupUser, loginUser } = require('../controllers/userController');

// login route
router.post('/login', loginUser);

// sign  up router
router.post('/signup', signupUser);

module.exports = router;
