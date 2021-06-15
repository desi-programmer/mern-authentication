var redis = require('redis');
var JWTR =  require('jwt-redis').default;
var redisClient = redis.createClient();
var jwtr = new JWTR(redisClient);
 
var secret = 'd6bc96a42a5c29e9def79db735962810c2e8555c3f75a4f8d1aa04cbd49c3b2c';
 

module.exports.generateToken = async (id) => {
    var token = await jwtr.sign({ id }, secret, { expiresIn : '1d' });
    return token;
}

module.exports.verifyToken = (token) => {
    return jwtr.verify(token, secret);
    
}

module.exports.deleteToken = (jti) => {
    return jwtr.destroy(jti);
    
}



// Create a token
// jwtr.sign(payload, secret)
//     .then(()=>{
//             // Token verification
//             return jwtr.verify(token, secret);
//     })
//     .then(()=>{
//             // Destroying the token
//             return jwtr.destroy(jti, secret);
//     });