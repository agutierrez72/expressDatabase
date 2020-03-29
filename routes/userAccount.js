const express = require('express')
const router = express.Router()
const User = require('../models/userAccount')

// All Users Route
router.get('/', (req, res) => {
    res.render('userAccounts/index')
})

// New User Route
router.get('/new', (req, res) => {
    res.render('userAccounts/new', { user: new User() })
})

// Create User Route
router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router