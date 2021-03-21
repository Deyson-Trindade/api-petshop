const roteador = require('express').Router()

roteador.get('/', (req, res) =>{
    res.send('ok')
})

module.exports = roteador