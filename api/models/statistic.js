const mongoose = require('mongoose')

const statisticSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: String, required: true },
    type: { type: String, required: true },
    comparison: { type: String, required: true },
    deaths: { type: Number, required: false }
})

module.exports = mongoose.model('Statistic', statisticSchema)