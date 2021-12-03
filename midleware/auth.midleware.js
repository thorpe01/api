const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');



module.exports.checkUser=(req,res,next)=>{
const token= req.cookies.jwt;

if(token){
    jwt.verify(token,process.env.TOKEN_SECRET, async(err,decodedToken) =>{
        if(err){
            res.locals.user = null;
        res.cookie('jwt','',{maxAGE:1});
        next();
        }else{

            let user = await UserModel.findById(decodedToken.id);
            res.local.user = user;
            console.log(res.locals.user);
            netx();
            }
        })
}else{
    res.locals.user=null;
    next();
}
};
module.exports.requireAuth=(req,res,next)=>{
 const token = req.cookies.jwt;
 if(token){
     jwt.verify(token, procces.env.TOKEN_SECRET,async(err, decodedToken)=>{
         if(err){
             console.log(err);
         }else{
             console.log(decodedToken.id);
             next();
         }
     });
 }else{
     console.log('no token');
 }
 };


   
