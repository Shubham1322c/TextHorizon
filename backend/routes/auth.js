const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();


// Create a user using : POST
router.get('/',[
    body('name', "Enter A Valid Name").isLength({ min: 3 }),
    body('email', "Enter A VAlid Email Address").isEmail(),
    body('password', "Enter Password Longer Then 8 Character").isLength({ min: 8 }),
], (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => res.json(user))
    .catch(err => {console.log(err)
    res.json({error: 'Please Enter A Unique Email Address'})
    });
})



module.exports = router;