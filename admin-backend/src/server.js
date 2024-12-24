const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Importing all routes
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', routes); // All routes will be prefixed with "/api"

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
