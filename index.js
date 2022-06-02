const api = require('./config')
const db = require('mongoose')
const app = require('./config')


const foodSchema = new db.Schema({}, {strict: false})
const food = db.model('foods', foodSchema, 'foods')

//find all
app.get('/api', async (req, res) =>{
    try {
        console.log("find all alimentos")
        const data = await food.find()
        res.status(200).json(data)
    } catch (error){res.status(400).json(error)}
    
})

//test para api online
app.get('/api/test', async (req, res) =>{
    try {
        console.log("TESTE API RODANDO")
        res.status(200).json("FUNCIONOU API ESTÁ RODANDO")
    } catch (error){res.status(400).json(error)}
    
})

//find by object id
app.get('/api/id/:id', async (req, res) =>{
    try {
        console.log("find by object id do alimento")
        const data = await food.findById(req.params.id)
        res.status(200).json(data)
    } catch (error){res.status(400).json(error)}
})

//find by nome do alimento completo
app.get('/api/fn/:name', async (req, res) => {
    try {
        console.log("find by nome em portugues do alimento")
        const data = await food.find().where('food_name_br', req.params.name)
        res.status(200).json(data)


    } catch (error) {res.status(400).json(error)}
})

//find by nome do alimento completo versão ingles
app.get('/api/fneng/:name', async (req, res) => {
    try {
        console.log("find by nome ingles do alimento")
        const data = await food.find().where('food_name_en', req.params.name)
        res.status(200).json(data)


    } catch (error) {res.status(400).json(error)}
})

//find by código do alimento
app.get('/api/cd/:codigo', async (req, res) => {
    try {

        console.log("find by código alimento")
        const data = await food.find().where('food_codigo', req.params.codigo)
        res.status(200).json(data)


    } catch (error) {res.status(400).json(error)}
})

//find by nome parcial do alimento
app.get('/api/fnl/:name', async (req, res) => {
    try {
        console.log("find by nome parcial do alimento")
        const userRegex = new RegExp(req.params.name, 'i')
        const data = await food.find({food_name_br: userRegex}).limit(5);
        res.status(200).json(data)


    } catch (error) {res.status(400).json(error)}
})