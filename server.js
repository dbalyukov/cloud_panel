const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRouter = require('./users-api');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', usersRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});