const express = require('express')
const responses = require('./controller/controller')
const Router = express.Router()


Router.get('/', responses.index)
Router.get('/Listas',responses.listas)
Router.get('/NovaLista',responses.nova_lista)
Router.post('/NovaLista',responses.nova_lista_post)
Router.post('/Listas',responses.newList)
Router.get('/Listas/:listname/excluir',responses.excluir_lista)
Router.get('/Listas/:listname',responses.listname)
Router.post('/Listas/:listname',responses.nova_tarefa)
Router.get('/Listas/:listname/:taskname/excluir',responses.excluir_tarefa)           

module.exports = Router