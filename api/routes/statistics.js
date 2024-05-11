const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Statistic = require('../models/statistic')

// GET request endpoint for /statistics
router.get('/', (req, res, next) => {
    Statistic.find()
    .exec()
    .then(docs => {
        console.log(docs)
        res.status(200).json(docs)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            error: error
        })
    })
})

// POST request endpoint for /statistics - status 201 means successful creation
router.post('/', (req, res, next) => {
    const statistic = new Statistic({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
        type: req.body.type,
        comparison: req.body.comparison,
        deaths: req.body.deaths
    })
    statistic
        .save()
        .then(result => {
        console.log(result)
        res.status(201).json({
            message: 'Handling POST requests to /statistics',
            createdStatistic: statistic
        })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            error: error
        })
    })
})


// GET request by ID
// If the ID is found, return the document with status 200
// If the ID is not found, return a message with status 404
// If there is an error, return the error with status 500
router.get('/:statisticId', (req, res, next) => {
    const id = req.params.statisticId
    Statistic.findById(id)
    .exec()
    .then(doc => {
        console.log('From database', doc)
        if (doc) {
            res.status(200).json(doc)
        } else {
            res.status(404).json({
                message: 'No valid entry found for provided ID'
            })
        }
        res.status(200).json({doc})
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            error: error
        })
    })
})

// PATCH request by ID with message returned as JSON "Updated Statistics"
// colon (:) after /statistics is a dynamic parameter
router.patch('/:statisticId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated statistic!'
    })
})

// DELETE request by ID with message returned as JSON "Deleted Statistics"
// colon (:) after /statistics is a dynamic parameter
// .exec() is to create a promise
router.delete('/:statisticId', (req, res, next) => {
    const id = req.params.statisticId
    Statistic.deleteOne({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            error: error
        })
    })
})





module.exports = router