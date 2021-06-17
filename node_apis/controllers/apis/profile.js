const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const User = require('../../models/user');
// url : /api/profile
// method : GET 
// access : Private 
// desc : Logout a user

router.get('/', auth ,async (req, res) => {
    
try {
    const userData = await User.findById(req.user.id).select('-password');
    res.status(200).json(userData);
} catch (error) {
        console.error(error);
        res.status(500).json({ msg : "Server Error !" });
}
});


module.exports = router;