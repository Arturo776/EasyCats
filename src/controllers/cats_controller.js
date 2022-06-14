/**
 * Cats.js controller file.
 * 
 * @author Arturo B. Martín <arturobautistacontacto@protonmail.com>
 * @description Controller for Cats.js.
 */

// Load Express.js
const express = require('express')
const axios = require('axios')
const path = require('path')
const __views = path.resolve(__dirname, '..', 'views')
const __css = path.resolve(__dirname, '..', 'css')

// Create get_data() function
exports.get_data = async function(req, res) {

    try {

        // Get API data.
        const cat_image = await axios.get('https://api.thecatapi.com/v1/images/search')
        const cat_facts = await axios.get('https://catfact.ninja/facts?limit=5')
        const cat_fact = await axios.get('https://catfact.ninja/fact')

        const facts = cat_facts.data.data.map(f => (f.fact))

        res.render(path.join(__views, '/cats.pug'), {
            image: cat_image.data[0].url,
            fact: cat_fact.data.fact,
            facts: facts.join(' '),
            css: path.join(__css, '/app.css')
        })

    }
    catch (e) {
        console.log(`Error: ${e}`);
    }

} 