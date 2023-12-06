const express = require('express');
const UserController = require('../controllers/userController');

// Create an instance of Express router
const router = express.Router();

// Route for handling user registration
router.post('/register', UserController.newUserRegistration);

// Route for handling user login
router.post('/login', UserController.userLogin);

module.exports = router;
