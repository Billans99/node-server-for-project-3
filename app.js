const express = require('express')
const app = express()

const statisticRoutes = require('./api/routes/statistics')

app.use('/statistics', statisticRoutes)

module.exports = app