const router = require('express').Router()

const Person = require('../Models/Person')

// Create - criação de dados
router.post('/', async (req, res) => {
    // console.log(req.body);

    // {name: 'Anderson', salary: 5000, approved: false}
    const { name, salary, approved } = req.body

    if (!name) {
        // Não foi processado com sucesso!
        res.status(422).json({ error: 'O nome é obrigatório' })
        return
    }

    const person = {
        name,
        salary,
        approved,
    }

    try {
        // criando dados
        await Person.create(person)

        res.status(201).json({ mensage: 'Pessoa cadastrada no sistema com sucesso!' })

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

// Read - leitura de dados retorna lista de pessoas
router.get('/', async (req, res) => {

    try {

        const people = await Person.find()

        res.status(200).json(people)

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

// Read - leitura de dados retorna uma pessoas pelo id
router.get('/:id', async (req, res) => {
    // estrair o dado da requisição, pela url = req.params
    const id = req.params.id

    try {

        const person = await Person.findOne({ _id: id })

        // validação: se a pessoa foi encontrada
        if (!person) {
            res.status(200).json({massage: 'A pessoa não foi encontrada!'})
            return
        }

        res.status(200).json({person})


    } catch (error) {
        res.status(500).json({ error: error })
    }
})

 // Updade - alterção de dados (PUT, PATCH)
 router.patch('/:id', async (req, res) => {

    const id = req.params.id

    const { name, salary, approved } = req.body

    const person = {
        name,
        salary,
        approved,
    }

    try {
        // alterando dados
        const updatePerson = await Person.updateOne({ _id: id }, person)

        /* validação: checa se houve alguma alteração com o método: 
        matChedCount === 0 -> nenhuma alteração feita */
        if (updatePerson.matchedCount === 0) {
            res.status(200).json({massage: 'Não foi possível alterar. A pessoa não foi encontrada!'})
            return
        }

        res.status(201).json({ mensage: 'Pessoa atualizada no sistema com sucesso!', person })

    } catch (error) {
        res.status(500).json({ error: error })
    }
 })

// Delete - apagar dados
router.delete('/:id', async (req, res) => {
    
    const id =  req.params.id

    const person = await Person.findOne({ _id: id })

    if (!person) {
        res.status(422).json({ massage: 'Não foi possível apagar. A pessoa não foi encontrada!' })
        return
    }

    try {

        await Person.deleteOne({ _id: id })

        res.status(422).json({ massage: `Pessoa foi apagada com sucesso!!!` })

    } catch (error) {
        res.status(500).json({ error: error })
    }
})


module.exports = router