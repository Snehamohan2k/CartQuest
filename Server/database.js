const { Pool } = require('pg');

// Create a new Pool instance for managing PostgreSQL connections
const pool = new Pool({
    // PostgreSQL server credentials
    user: 'postgres',                          // PostgreSQL username
    host: process.env.HOST_NAME,               // PostgreSQL server host (localhost in this case)
    database: process.env.DATABASE_NAME,       // Name of the PostgreSQL database
    password: process.env.DATABASE_PASSWORD,   // Password for the PostgreSQL user
    port: process.env.DB_PORT_NUMBER,          // Port on which PostgreSQL is running (default is 5432)
});

// Export the pool to make it available for other parts of the application
module.exports = pool;
