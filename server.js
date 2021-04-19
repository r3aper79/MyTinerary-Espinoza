require('dotenv').config()

const express = require('express')
const cors = require ('cors')
const router = require ('./routes/index')
require('./config/database')

//middleWare
const app = express()
app.use(cors())
app.use(express.json())

//localhost:4000/api
app.use('/api',router)


//conectarse al puerto (numero puerto , funcion de callback)
app.listen(3080, ()=> console.log("App is listening on port 3080"))