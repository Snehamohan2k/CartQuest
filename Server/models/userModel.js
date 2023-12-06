const bcrypt = require('bcrypt');
const pool = require('../database');

const UserModel = {
    // Function for creating a new user in the database
    async createUser(userName, password, userEmail, phoneNumber) {
        // Hash the provided password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the user information into the 'user_info' table and retrieve the 'user_name'
        const result = await pool.query('INSERT INTO user_info (user_info, user_name, password, phone_number) VALUES ($1, $2, $3, $4) RETURNING user_name', [userEmail, userName, hashedPassword, phoneNumber]);

        // Return the 'user_name' of the newly created user
        return result.rows[0].user_name;
    },

    // Function for finding a user by 'user_email' in the database
    async findUserByUserEmail(userEmail) {
        // Retrieve user information from the 'user_info' table based on 'user_email'
        const result = await pool.query('SELECT * FROM user_info WHERE user_email = $1', [userEmail]);

        // Return the first row (user) from the result
        return result.rows[0];
    }
};

module.exports = UserModel;
