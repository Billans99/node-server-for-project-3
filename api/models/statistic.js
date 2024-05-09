const mongoose = require('mongoose')

const statisticSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    content: String,
    date: String,
    type: String,
    comparison: String,
    deaths: Number
})

module.exports = mongoose.model('Statistic', statisticSchema)