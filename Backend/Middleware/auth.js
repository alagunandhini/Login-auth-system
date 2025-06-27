const jwt=require('jsonwebtoken');

const securityGuard=(req,res,next)=>{
// stores the users token given
const header =req.headers.authorization;
// checks token is valid or not
if(!header|| !header.startsWith('Bearer')){
return res.json({message:"Not valid"})
}
// only take the original token 
const token =header.split(" ")[1];
//verify the token 
try{
    const decoded= jwt.verify(token,process.env.JWT_SECRET);
    req.userId=decoded.userId;
    next();

}catch(e){
    return res.json({message:"wrong token"})
}
}
module.exports=securityGuard;