const express = require('express')
const app = express()
const connectDB = require('./config/database')

// Importing env data
require('dotenv').config({path: './config/.env'})

connectDB()

// Setting render engine  & express commands
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes
const wallRoutes = require('./routes/wall')

// Using routes
app.use('/', wallRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running, you better catch it! Port: ${process.env.PORT}`)
})