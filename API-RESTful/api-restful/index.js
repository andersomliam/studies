
// link da aula: https://youtu.be/K5QaTfE5ylk

// Config inicial
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()

// forma de ler JSON / middlewares, são executado entre as requisições de resposta
app.use(
    /**
     * Retorna um middleware que apenas analisa corpos urlencoded e 
     * apenas examina solicitações em que o cabeçalho Content-Type 
     * corresponde à opção de tipo.
     */
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota inicial / endpoint
app.get('/', (req, res) => {
    // mostrar req

    res.json({ message: 'Oi Express!' })
})

//* CONXÃO COM O MANGODB */

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

// entregar uma portas
mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.k2pdxic.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('Conectado ao MongoBD!')
        app.listen(3003)
    })
    .catch((err) => console.log(`ERROR: ${err}`))