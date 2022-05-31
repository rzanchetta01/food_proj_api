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
.connect('mongodb://rzanchetta02:RqYdvnAtHiYUbXJkgexAR7bzqA2qE6BFy5N0lj9pZX5s8gcgNJE20EDDcUuUoftDTpI3C72tQPhJRHrytP43iQ==@rzanchetta02.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@rzanchetta02@')
.then(
    console.log('API -- DB CONNECTED -- API ONLINE'),
    app.listen(3001)
).catch(err => console.log(err))


module.exports = app