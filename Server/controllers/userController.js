const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const UserController = {
    // Controller function for handling new user registration
    async newUserRegistration(req, res) {
        try {
            // Extract user information from the request body
            const { userName, password, userEmail, phoneNumber } = req.body;

            // Create a new user in the database using the UserModel
            const newUser = await UserModel.createUser(userName, password, userEmail, phoneNumber);

            res.status(201).json({ message: 'New User Registered Successfully', newUser });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Controller function for handling user login
    async userLogin(req, res) {
        try {
            // Extract user email and password from the request body
            const { userEmail, password } = req.body;

            // Find a user by user email in the database using the UserModel
            const user = await UserModel.findUserByUserEmail(userEmail);

            if (!user) {
                return res.status(401).json({ message: 'Invalid Credentials' });
            }

            // Compare the provided password with the user's password using bcrypt
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid Credentials' });
            }

            // Sign a JWT token with the user email and a secret key
            const token = jwt.sign({ userEmail: user.user_email }, "cartQuest", { expiresIn: '2h' });

            // Respond with a success message and the JWT token
            res.json({ message: 'Login Successful', token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = UserController;
