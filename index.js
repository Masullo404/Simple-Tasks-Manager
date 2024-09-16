const express = require('express')
const path = require('node:path')
const Router = require('./routes.js')

const server = express()
//Static assets like css
server.use(express.static('assets'))
//Processing files with ejs type | Root : html
server.set('view engine','ejs')
//Server main file 
server.set('views',path.join(__dirname,'views'))
// Processing html files
server.set(express.urlencoded({extended:true}))
// Creating the routes
server.use(Router)

const PORT = process.env.PORT || 3000
server.listen(PORT)