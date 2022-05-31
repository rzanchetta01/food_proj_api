const db = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    }),
    cors(),
    express.json()

)

db
.connect('mongodb+srv://admin:aiJ9uIFNBJeOfL0O@apirpg.zmnvg.mongodb.net/Foods_Proj?retryWrites=true&w=majority')
.then(
    console.log('API -- DB CONNECTED -- API ONLINE'),
    app.listen(3001)
).catch(err => console.log(err))


module.exports = app