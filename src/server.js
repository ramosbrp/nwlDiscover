// Declaração de variáveis
const express = require('express')
const route = require ('./route')
const path = require('path')


const server = express()

// Setando ejs
server.set('view engine', 'ejs')

// Mostrando a pasta public para o express achar os arquivos
server.use(express.static('public'))

// Mostra o diretório views para o módulo path
server.set('views', path.join(__dirname, 'views'))


server.use(route)

// Porta
server.listen(3000, ()=> console.log('Rodando'))

