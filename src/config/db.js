import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

const mongoUri = process.env.MONGO_URI
const connDB = async () => {
    try {
        await mongoose.connect(mongoUri)
        console.log('Database connected...!!!!')
    } catch (error) {
        console.log('(config/db.js) MongoDb connection FAILED :>> ', error);
    }
}

export { connDB }