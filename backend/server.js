const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('./models/db')
const cards = require('./controller/cards')
const port = process.env.PORT || 2000
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/api/tinder/user' , cards)
app.listen(port , ()=>{
    console.log(`Server is running on ${port}`)
})