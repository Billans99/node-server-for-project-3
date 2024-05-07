const express = require('express')
const app = express()

const statisticRoutes = require('./api/routes/statistics')
const memberRoutes = require('./api/routes/members')


app.use('/statistics', statisticRoutes)
app.use('/members', memberRoutes)


module.exports = app