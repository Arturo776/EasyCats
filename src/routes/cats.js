/**
 * Cats.js router file.
 * 
 * @author Arturo B. Martín <arturobautistacontacto@protonmail.com>
 * @description Router for Cats.js controller.
 */

// Load functionalities.
const express = require('express')
const router = express.Router()
const cats_controller = require('../controllers/cats_controller.js')

// Set routes.
router.get('/', cats_controller.get_data)

// Export new routes.
module.exports = router