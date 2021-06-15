const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const jwtHandler = require('../middleware/jwt_handler');
const User = require('../../models/user');


// url : /api/login
// method : POST 
// access : Public 
// desc : Login a user

router.post('/', [
     check('email', "Please Include a Valid email").isEmail(),
     check('password', "Use a Strong password with 6 or more characters").exists(),
] ,async (req, res) => {
    // TODO : validate data 
    const error  = validationResult(req);
    // TODO : Send Errors
    if(!error.isEmpty()){
        return res.status(400).json({ 'errors' : error.array() });
    }

    var { email, password } = req.body;
    // TODO : Check if a user exists
    try {
        let user = await User.findOne({ email : email });
        if(!user){
            return res.status(400).json({ 'errors' : [{ msg : "Invalid Credentials !" }] });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({ 'errors' : [{ msg : "Invalid Credentials !" }] });
        }


        // valid user is present 

        var token = await jwtHandler.generateToken(user.id);
        return res.json({ token });




    } catch (error) {
            console.error(error);
            return res.send(500).json("Server error");
    }
    // TODO : send Token
})  

module.exports = router;