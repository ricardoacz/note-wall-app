const express = require('express')
const app = express()
const connectDB = require('./config/database')

// Auth modules
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')
const User = require('./models/User')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')

// Importing env data
require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

// Setting render engine  & express commands
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({mongoUrl: process.env.DB_STRING}),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    console.log(req.user)
    next();
    });

// Routes
const homeRoutes = require('./routes/home')
const wallRoutes = require('./routes/wall')

// Using routes
app.use('/', homeRoutes)
app.use('/wall', wallRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running, you better catch it! Port: ${process.env.PORT}`)
})