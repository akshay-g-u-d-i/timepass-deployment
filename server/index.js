const express = require('express')
const {mongodb} = require('./database')
const app = express()
const port = 5000
const createuser = require('./routes/createuser')



mongodb()

app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Hello front-end, this is back-end")
})

app.listen(port, ()=>{
    console.log("Listening on port",{port})
})

app.use('/api/createuser', createuser)

