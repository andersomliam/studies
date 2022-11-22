const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    name: String,
    salary: Number,
    approved: Boolean,
})

module.exports = Person

/* 

    0:30:36 Criando as rotas
    1:04:35 Update de pessoa
    1:15:35 Bonus

*/