const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/user');
const Bookings = require('../../models/bookings');
const auth = require('../middleware/auth');


// url : /api/book
// method : POST 
// access : Private
// desc : Book a service

router.post('/', auth , [
     check('service', "Service is required").not().isEmpty(),
     check('date', "use a valid Date").not().isEmpty(),
] ,async (req, res) => {
    const error  = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({ 'errors' : error.array() });
    }

    try {
        let user = await User.findById({ _id : req.user.id });
    var booking = Bookings({
        email : user.email,
        service : req.body.service,
        date : req.body.date
    });
    await booking.save();
    res.status(200).json({ 'msg' : "Booked Successfully !"});
    } catch (error) {
        console.log(error);
        return res.status(500).json("Server error");
    }
    
})  

module.exports = router;