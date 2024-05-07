const express = require('express')
const router = express.Router()

// GET request for /members, status 200 meaning - successful
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "List of members fetched successfully"
    })
})

// POST request for /members route, status 201 meaning - successful creation
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Member added successfully'
    })
})


router.get('/:memberId', (req, res, next) => {
    res.status(200).json({
        message: 'Member details',
        memberId: req.params.memberId
    })
})

router.delete('/:memberId', (req, res, next) => {
    res.status(200).json({
        message: 'Member deleted successfully',
        memberId: req.params.memberId
    })
})

module.exports = router