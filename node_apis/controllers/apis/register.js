const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const jwtHandler = require('../middleware/jwt_handler');
const User = require('../../models/user');


// url : /api/register 
// method : POST 
// access : Public 
// desc : register a user

// TODO : not validating password confirm

router.post('/', [
     check('email', "Please Include a Valid email").isEmail(),
     check('password', "Use a Strong password with 6 or more characters").isLength({ min : 6 }),
] ,async (req, res) => {
    const error  = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({ 'errors' : error.array() });
    }
   
    var { email, password} = req.body;

    console.log(email);

    try {
        let user = await User.findOne({ email : email });
        if(user){
            return res.status(400).json({ 'errors' : [{ msg : "User already exists !" }] });
        }
        // TODO : encrypt the password
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);


        // CREATE A USER
        user = new User({
            name : "Test",
            email,
            password
        });
        await user.save();

        // TODO : login the user

        var token = await jwtHandler.generateToken(user.id);
        return res.json({ token });

    } catch (error) {
            console.error(error);
            return res.send(500).json("Server error");
    }
    // TODO : send Token
})  

module.exports = router;