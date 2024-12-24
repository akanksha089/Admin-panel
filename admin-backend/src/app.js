const express = require('express');
const routes = require('./routes/index');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api', routes);

module.exports = app;
