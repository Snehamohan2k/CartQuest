const { Pool } = require('pg');

// Create a new Pool instance for managing PostgreSQL connections
const pool = new Pool({
    // PostgreSQL server credentials
    user: 'postgres',         // PostgreSQL username
    host: 'localhost',        // PostgreSQL server host (localhost in this case)
    database: 'CartQuest',    // Name of the PostgreSQL database
    password: 'postgres',     // Password for the PostgreSQL user
    port: 5431,                // Port on which PostgreSQL is running (default is 5432)
});

// Export the pool to make it available for other parts of the application
module.exports = pool;
