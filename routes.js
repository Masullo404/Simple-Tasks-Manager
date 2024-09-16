const express = require('express')
const responses = require('./controller/controller')
const Router = express.Router()
console.log(responses.index)

Router.get('/', responses.index)

module.exports = Router