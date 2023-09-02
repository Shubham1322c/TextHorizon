const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const fetchuser = require("../middleware/fetchuser");
var jwt = require('jsonwebtoken');



const JWT_SECRET = "sdhfjalshfueh8923478*&^%jahdui7665%$65EHIUU34#G5^&%";


//Route 1:  Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
      // Check whether the user with this email exists already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }

    // encrypt userr password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    })
    const data = {
        user:{
            id : user.id
        }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({authtoken})
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error occured");
  }
})



//Route 2: Authenticate user using POST: "api/auth/login" no login require
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists()
], async (req, res) => {

  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email, password} = req.body;

  try {  
       // Check whether the user with this email exists already
       let user = await User.findOne({email});
       if (!user) {
         return res.status(400).json({ error: "Please Enter Right Credentials" });
       }

       const comparePass = await bcrypt.compare(password, user.password);
       if(!comparePass){
        return res.status(400).json({ error: "Please Enter Right Credentials" });
       }

      const data = {
          user:{
              id : user.id
          }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({authtoken})

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error occured");
  }
})


//Route 3: Get User Details Authenticate user using POST: "api/auth/getuser" login require
router.post('/getuser', fetchuser, async (req, res) => {

try {
  userId = req.user.id;
  const user = await User.findById(userId).select("-password");
  res.send(user);
} catch (error) {
  console.error(error.message);
  res.status(500).send("Some Error occured");
}

})



module.exports = router