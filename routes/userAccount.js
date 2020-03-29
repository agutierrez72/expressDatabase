const express = require('express')
const router = express.Router()
const User = require('../models/userAccount')

// All Users Route
router.get('/', async (req, res) => {
    let searchOptions = {}
    if(req.query.name != null && req.query.name !=''){
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try{
        const users = await User.find(searchOptions)
        res.render('userAccounts/index', { 
            users: users,
            searchOptions: req.query
        })
    } catch{
        res.redirect('/')
    }
    
})

// New User Route
router.get('/new', (req, res) => {
    res.render('userAccounts/new', { user: new User() })
})

// Create User Route
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.firstName +" "+ req.body.lastName,
        username: req.body.userName,
        password: req.body.password2
    })
    try{
        const newUser = await user.save()
        res.redirect('users')
    } catch{
        res.render('userAccounts/new', {
            user: user,
            errorMessage: 'Error creating User'
        })
    }
    // user.save((err, newUser) => {
    //     if(err){
    //         res.render('userAccounts/new', {
    //             user: user,
    //             errorMessage: 'Error creating User'
    //         })
    //     } else{
    //         // res.redirect('users/${newUser.id}')
    //         res.redirect('users')
    //     }
    // })
    
})

module.exports = router