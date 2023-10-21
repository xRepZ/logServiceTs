require('dotenv').config()
const express = require("express")
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/errorHandle')

const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)


app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => { console.log(`starting at PORT = ${PORT}`) })
    } catch (e) {
        console.log(e)
    }
}

start()
