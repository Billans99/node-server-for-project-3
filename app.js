const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const statisticRoutes = require('./api/routes/statistics')
const memberRoutes = require('./api/routes/members')

mongoose.connect(
    'mongodb+srv://Billans1:' + 
    process.env.REACT_APP_MONGOATLAS_PW + 
    '@mens-mental-health-node.e4sf8i0.mongodb.net/?retryWrites=true&w=majority&appName=mens-mental-health-node', 
{
    useMongoClient: true
})

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// define which clients to accept (All)
// define which headers to accept (All these header can be appended to an incoming request)
// options request is sent first to see if it is allowed to send the request
// res.header(Allow methods... PUT... POST... PATCH... DELETE... GET) - are allowed methods
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }   
    next()
})

// Routes which should handle requests
app.use('/statistics', statisticRoutes)
app.use('/members', memberRoutes)

// Error handling
app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app