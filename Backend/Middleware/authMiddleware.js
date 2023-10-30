const jwt = require('jsonwebtoken')
const asynchandler = require('express-async-handler')
const Users = require('../Models/UserModel.jsx')

const protect = asynchandler(async(req, res, next) =>{
    let token;

    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ){
        try{
            token = req.headers.authorization.split(" ")[1]

            const decoded = jwt.verify(token, process.env.SECRET);
            req.user = await User.findby(decoded.id).select("-password");
            next();
        }catch(error){
            res.status(401);
            throw new Error("Not Authorised Token failed")
        }
    }if(!token){
        res.status(401);
        throw new Error("Not Authorised No Token");
    }
})


module.exports = {protect};
