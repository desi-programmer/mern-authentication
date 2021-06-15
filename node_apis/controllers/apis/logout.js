const express = require('express');
const router = express.Router();

const jwtHandler = require('../middleware/jwt_handler');
const auth = require('../middleware/auth');

// url : /api/logout
// method : GET 
// access : Private 
// desc : Logout a user

router.get('/', auth ,async (req, res) => {
    jwtHandler.deleteToken(req.user.jti);
    res.json({ msg : "Logout Successful !" });
});

module.exports = router;