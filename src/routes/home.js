/**
 * Home.js router file.
 * 
 * @author Arturo B. Martín <arturobautistacontacto@protonmail.com>
 * @description Router for Home.js controller.
 */

// Load functionalities.
const express = require('express')
const router = express.Router()
const home_controller = require('../controllers/home_controller.js')

// Set routes.
router.get('/', home_controller.get_home)

router.get('/about', home_controller.get_about)

// Export new routes.
module.exports = router