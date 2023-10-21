require('dotenv').config()
import express from 'express'
import { sequelize } from './db'
import { LogsModel } from './models/models'
import cors from 'cors'
import router from './routes/index'
import {errorHandler} from './middleware/errorHandle'

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