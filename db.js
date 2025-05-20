const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'panel_user',
    password: process.env.DB_PASSWORD || 'ваш_пароль',
    database: process.env.DB_NAME || 'cloud_panel',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;