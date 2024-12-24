const db = require('../config/db.config');

exports.fetchAllUsers = async () => {
    const [users] = await db.query('SELECT * FROM users');
    return users;
};

exports.insertUser = async (user) => {
    const { name, email } = user;
    const [result] = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    return { id: result.insertId, name, email };
};
