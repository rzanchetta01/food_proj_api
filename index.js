const api = require('./config')
const db = require('mongoose')
const app = require('./config')


const foodSchema = new db.Schema({}, {strict: false})
const food = db.model('foods2', foodSchema, 'foods2')


app.get('/api', async (req, res) =>{
    try {
        const data = await food.find()
        res.status(200).json(data)
    } catch (error){res.status(400).json(error)}
    
})

app.get('/api/id/:id', async (req, res) =>{
    try {
        const data = await food.findById(req.params.id)
        res.status(200).json(data)
    } catch (error){res.status(400).json(error)}
})


app.get('/api/fn/:name', async (req, res) => {
    try {
        const data = await food.find().where('food_name_br', req.params.name)
        res.status(200).json(data)


    } catch (error) {res.status(400).json(error)}
})

app.get('/api/fneng/:name', async (req, res) => {
    try {
        const data = await food.find().where('food_name_en', req.params.name)
        res.status(200).json(data)


    } catch (error) {res.status(400).json(error)}
})


app.get('/api/cd/:codigo', async (req, res) => {
    try {
        const data = await food.find().where('food_codigo', req.params.codigo)
        res.status(200).json(data)


    } catch (error) {res.status(400).json(error)}
})

app.get('/api/fnl/:name', async (req, res) => {
    try {

        const userRegex = new RegExp(req.params.name, 'i')
        const data = await food.find({food_name_br: userRegex}).limit(5);
        res.status(200).json(data)


    } catch (error) {res.status(400).json(error)}
})