/**
 * Run script file.
 * 
 * @author Arturo B. Martín <arturobautistacontacto@protonmail.com>
 * @description Node.js server built with Express.js, Pug templates, Bootstrap CSS and Axios.
 */

// Load functionalities.
const express = require('express')
const app = express()
const path = require('path')

// Configuration.
app.set('view engine', 'pug')
const __routes = path.resolve(__dirname, '.', 'src/routes')

// Set routers.
const home = require(path.join(__routes, '/home.js'))
app.use('/', home)

const cats = require(path.join(__routes, '/cats.js'))
app.use('/cats', cats)

// Call server.
app.listen(3000, () => {
    console.log(`Server running on 'http://localhost:3000'.`)
})