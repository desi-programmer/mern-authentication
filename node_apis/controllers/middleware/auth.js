const jwtHandler = require('./jwt_handler');


module.exports = async function(req, res , next){
    // grab the token
    // BEARER 
    // const token = req.header('Authorization').split(" ")[1];
    // x-auth-token
    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({ msg : "No token, Auth Denied !" });
    }

    try {
        var decoded = await jwtHandler.verifyToken(token);
        req.user = decoded;
        next();
    } catch (error) {
            return res.status(401).json({ msg : "Invalid Token !" });
    }

}