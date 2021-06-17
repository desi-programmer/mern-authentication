const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const User = require('../../models/user');
const Bookings = require('../../models/bookings');
// url : /api/bookings
// method : GET 
// access : Private 
// desc : Retuns Bookings a user

router.get('/', auth ,async (req, res) => {
    
try {
    let userData = await User.findById(req.user.id);
    var bookings = await Bookings.find({ email : userData.email });

    res.json({ bookings });
} catch (error) {
        console.error(error);
        res.status(500).json({ msg : "Server Error !" });
}
});


module.exports = router;