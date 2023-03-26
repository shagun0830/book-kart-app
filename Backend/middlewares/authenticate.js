const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authenticate = async (req, res, next)=>{

   try {
    
    const token = req.cookies.loginToken;
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    const rootUser = await User.findById({_id: verifyToken._id, "tokens.token":token} );
    if(!rootUser){
        throw new Error('User not found');
    }
    
    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;
    next();

   } catch (error) {
    res.status(401).send({message:"unauthorized"});
    console.log(error);
   }

}

module.exports = authenticate;