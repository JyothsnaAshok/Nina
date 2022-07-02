const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
    const jwtSecret = process.env.SECRET;
    //Get Token
    const token = req.header("x-auth-token");

    if (!token) {
        return res
            .status(401)
            .json({ message: "No token, authorization denied" });
    }

    //Verify Token
    try {
        const decode = jwt.verify(token, jwtSecret);
        req.user = decode.user;
        next();
    } catch (err) {
        res.status(401).json({ message: "Token is not valid" });
    }
};
