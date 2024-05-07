const express = require('express')
const app = express()
const morgan = require('morgan')


const statisticRoutes = require('./api/routes/statistics')
const memberRoutes = require('./api/routes/members')

app.use(morgan('dev'))

// Routes which should handle requests
app.use('/statistics', statisticRoutes)
app.use('/members', memberRoutes)

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status(404)
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