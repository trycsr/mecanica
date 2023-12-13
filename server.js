//Toda a base de dados armazenados na memória do projeto por meio de toda a implementação deste código.
import { fastify } from 'fastify'
import {DatabaseMemory} from "./database-memory.js"

const server = fastify()
const database = new DatabaseMemory()

server.post('/motor', (request, reply) => {
   const {potencia, cilindro, tamanho} = request.body
    database.create({
        potencia: potencia,
        cilindro: cilindro,
        tamanho: tamanho
    })
    console.log(database.list())
    return reply.status(201).send()
})

server.get('/motor', (request) => {
    const search = request.query.search

    console.log(search)
    
    const motor = database.list(search)
   
    return motor
})

server.put('/motor/:id', (request, reply) => {

    const motorId = request.params.id
    const {potencia, cilindro, tamanho} = request.body
    const motor = database.update(motorId, {
        potencia,
        cilindro,
        tamanho,
    })
    return reply.status(204).send()
})

server.delete('/motor/:id', (request, reply) => {
    const motorId = request.params.id

    database.delete(motorId)

    return reply.status(204).send()
})

server.listen({
    port: 3333,
})
