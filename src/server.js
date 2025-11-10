//const http = require('http')
// CommonJs => require
// ESModules => Import/export
// import fastify from 'fastify'

import http from 'node:http'


// Create user ( name, email, password)
//Rotas diferentes para:

// Criar usuarios
// Listangem de Usuarios 
// Edicao de Usuarios
// Remocao de Usuarios
// Requisicao HTTP ---
//- Seria Metodo HTTP
//- Url

// GET, POST, PUT, PATCH , DELETE (PRINCIPAIS METODOS UTILIZADOS)

// GET => Buscar um recurso no BACK-END
// POST => Criar um recurso no BACK-END
// PUT => Atualizar um recurso no BACK-END
// PATCH => Atualizar uma informação específica de um recurso NO BACK-END
// DELETE => Deletar um recurso do BACK-END

//   ACEITAR NOTIFICAÇÕES OU NÃO, NESSE CASO BEEM ESPECÍFICO SERIA PATCH

// GET /users => Buscando usuários do back-end
// POST /users => criando um usuário no back-end


// Stateful - dependa da memoria e das informacoes salvas nela para funcionar. 
// 
// Stateless - N salva em memoria e sim dispositivos externos como bancos de dados.


// JSON - JavaScript Object Notation

// Cabecalhos (Requisiccao/resposta) => Metadados.

// HTTP Status Code

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if(method === 'GET' && url ==='/users') {
        //Early return
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }
    if(method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name:"John Doe",
            email:"johndoe@example.com",
        })

        return res.writeHead(201).end()
    }


    return res.writeHead(404).end('Not Found')
})

server.listen(3333)
//localport:3333



