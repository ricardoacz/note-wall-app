const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_STRING)
        console.log(`Connected to mongodb database: ${conn.connection.host}`)
    } catch (error) {
        console.log('fail to connect to database', error)
    }
}

module.exports = connectDB