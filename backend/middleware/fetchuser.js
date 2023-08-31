var jwt = require('jsonwebtoken');
const JWT_SECRET = "sdhfjalshfueh8923478*&^%jahdui7665%$65EHIUU34#G5^&%";

const fetchuser = (req, res, next) => {
    const token = req.header("auth-token");
    if(!token){
        res.status(401).send({error: "Please authenticate with a valid"});
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    }  catch (error) {
        console.error(error.message);
        res.status(500).send("Please authenticate with a valid");
      }
}





module.exports = fetchuser;