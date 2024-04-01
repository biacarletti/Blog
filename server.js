import { fastify } from 'fastify'

// import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

//const database = new DatabaseMemory()
const database = new DatabasePostgres()

server.post('/post', async (request, reply) => {
    const { title, textBox, attachment_uri } = request.body

    await database.create({
        title,
        textBox,
        attachment_uri
    })

    return reply.status(201).send()
})

server.get('/post', async (request) => {

    const search = request.query.search

    const post = await database.list(search)

    return post
})

server.put('/post/:id', async (request, reply) => {
    const postId = request.params.id
    const { title, textBox, attachment_uri, type, created_at } = request.body

    await database.update(postId, {
        title,
        textBox,
        attachment_uri,
        type,
        created_at
    })

    return reply.status(204).send()
})

server.delete('/post/:id', async (request, reply) => {
    const postId = request.params.id

    await database.delete(postId)

    return reply.status(204).send()
})

server.listen({
    port:process.env.PORT ?? 3333
})

