const express = require('express')
const router = express.Router()

// GET request endpoint for /statistics
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /statistics'
    })
})

// POST request endpoint for /statistics
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /statistics'
    })
})

// GET request by ID
router.get('/:statisticId', (req, res, next) => {
    const id = req.params.statisticId
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
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
router.delete('/:statisticId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted statistic!'
    })
})





module.exports = router