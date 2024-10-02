import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { connDB } from './config/db.js'

const app = express()

const PORT = process.env.PORT || 4000

connDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port http://localhost:${PORT}`)
    })
}).catch((error) => {
        console.log('(server.js) Database connection FAILED :>> ', error);
})
