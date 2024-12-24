const express = require('express');
const userController = require('../controllers/userController'); // Importing user controller

const router = express.Router();

// Define route for getting all users
router.get('/', userController.getAllUsers);

// Define route for creating a new user
router.post('/', userController.createUser);

// Define route for getting a specific user by ID
router.get('/:id', userController.getUserById);

// Define route for updating a specific user by ID
router.put('/:id', userController.updateUser);

// Define route for deleting a specific user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
