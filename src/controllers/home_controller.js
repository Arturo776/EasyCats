/**
 * Home.js controller file.
 * 
 * @author Arturo B. Martín <arturobautistacontacto@protonmail.com>
 * @description Controller for Home.js.
 */

// Load Express.js
const express = require('express')
const path = require('path')
const __views = path.resolve(__dirname, '..', 'views')

// Create get_data() function
exports.get_home = function(req, res) {
    res.render(path.join(__views, '/home.pug'))
}

exports.get_about = function(req, res) {
    res.render(path.join(__views, '/about.pug'))
}