// users-api.js
const express = require('express');
const router = express.Router();
const pool = require('./db');

// Получение всех пользователей
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users ORDER BY id');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Добавление пользователя
router.post('/', async (req, res) => {
    const { name, email, role } = req.body;
    
    if (!name || !email || !role) {
        return res.status(400).json({ error: 'Все поля обязательны' });
    }

    try {
        const [result] = await pool.query(
            'INSERT INTO users (name, email, role) VALUES (?, ?, ?)',
            [name, email, role]
        );
        const [newUser] = await pool.query('SELECT * FROM users WHERE id = ?', [result.insertId]);
        res.status(201).json(newUser[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Обновление пользователя
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, role } = req.body;

    try {
        await pool.query(
            'UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?',
            [name, email, role, id]
        );
        const [updatedUser] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        res.json(updatedUser[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Удаление пользователя
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [user] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        if (user.length === 0) {
            return res.status(404).json({ error: 'Пользователь не найден' });
        }

        await pool.query('DELETE FROM users WHERE id = ?', [id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;