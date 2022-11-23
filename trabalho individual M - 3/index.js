const express = require('express')
const { response } = require('express')
const { uuid } = require('uuidv4')//id unico


const motorola = express()
motorola.use(express.json())
const celulares = []
const fones = []
const smartwatch = []



//---------------------------------------celulares---------------------------------------------//

motorola.get('/celulares', (request, response) => {
    return response.json(celulares)
})//Visualizar
motorola.post('/celulares', (request, response) => {
    const { hardwarer, software, preço } = request.body
    const especificacao = { id: uuid(), hardwarer, software, preço }
    celulares.push(especificacao)
    return response.status(201).json(especificacao)

})//inserir
//put atualiza
motorola.put('/celulares/:id', (request, response) => {
    const { id } = request.params
    const { hardwarer, software, preço } = request.body
    const newcelulares = { id, hardwarer, software, preço }
    const especificacaoindex = celulares.findIndex(especificacao => especificacao.id == id)
    celulares[especificacaoindex] = newcelulares;
    return response.json(newcelulares)
})
//delete apaga
motorola.delete('/celulares/:id', (request, response) => {
    const { id } = request.params
    const especificacaoindex = celulares.findIndex(especificacao => especificacao.id == id)
    celulares.splice(especificacaoindex, 1)
    return response.status(204).send()
})


motorola.listen(8181, () => {
    console.log('O Servidor foi iniciado!')
})


///------------------fones-----------------------------------//

motorola.get('/fones', (request, response) => {
    return response.json(fones)
})//Visualizar
motorola.post('/fones', (request, response) => {
    const { Monitor, Teclado, mouse } = request.body
    const especificacao = { id: uuid(), Monitor, Teclado, mouse }
    fones.push(especificacao)
    return response.status(201).json(especificacao)

})//inserir
//put atualiza
motorola.put('/fones/:id', (request, response) => {
    const { id } = request.params
    const { Monitor, Teclado, mouse } = request.body
    const newfones = { id, Monitor, Teclado, mouse }
    const especificacaoindex = fones.findIndex(especificacao => especificacao.id == id)
    fones[especificacaoindex] = newfones;
    return response.json(newfones)
})
//delete apaga
motorola.delete('/fones/:id', (request, response) => {
    const { id } = request.params
    const especificacaoindex = fones.findIndex(especificacao => especificacao.id == id)
    fones.splice(especificacaoindex, 1)
    return response.status(204).send()
})

//----------------------------------------------------Notebooks--------------------//

motorola.get('/smartwatch', (request, response) => {
    return response.json(smartwatch)
})//Visualizar
motorola.post('/smartwatch', (request, response) => {
    const { modelo, memoria, ssd } = request.body
    const especificacao = { id: uuid(), modelo, memoria, ssd }
    smartwatch.push(especificacao)
    return response.status(201).json(especificacao)

})//inserir
//put atualiza
motorola.put('/smartwatch/:id', (request, response) => {
    const { id } = request.params
    const { modelo, memoria, ssd } = request.body
    const newsmartwatch = { id, modelo, memoria, ssd }
    const especificacaoindex = smartwatch.findIndex(especificacao => especificacao.id == id)
    smartwatch[especificacaoindex] = newsmartwatch;
    return response.json(newsmartwatch)
})
//delete apaga
motorola.delete('/smartwatch/:id', (request, response) => {
    const { id } = request.params
    const especificacaoindex = smartwatch.findIndex(especificacao => especificacao.id == id)
    smartwatch.splice(especificacaoindex, 1)
    return response.status(204).send()
})