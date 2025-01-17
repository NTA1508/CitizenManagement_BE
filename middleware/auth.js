const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = function (req,res,next) {
    //get token
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send("Access denied. No token provided");

    try {
        const decodedToken = jwt.verify(token,config.get("jwtPrivateKey"));
        req.decodedToken = decodedToken;
        next();
    } catch (err) {
        res.status(400).send("Invalid token")
    }
}