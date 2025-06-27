var express = require('express');
var router = express.Router();
var bcrypt= require('bcryptjs')
var jwt =require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// For Registration
router.post('/register', async(req, res, next) => {
 
  try{
 const {name,email,password,}=req.body; // users request are stored in variable
 // finding wheather entered email is in DB
 const existEmail= await prisma.user.findUnique({
  where:{email}
 })

 // if email exist , return msg: "already exist "
 if(existEmail) {
  return res.json("email already exist") // it will return response
 }
 // change the password to encrypted password 
const hashPassword = await bcrypt.hash(password,10);
// it stores the email and hashed password
await prisma.user.create({
  data:{ name ,email,password:hashPassword}
})
res.json("registered successfully")
  }
  catch(e){
    console.error(e.message);
    res.json("something went wrong!, try again!")
  }
});

// for login 
router.post('/login', async(req, res, next) => {

  try{
    const {email,password}=req.body;
    // to check email exist
    const exist = await prisma.user.findUnique({where:{email}});
    // if not email found in DB return "invalid"
    if(!exist){
      return res.json("invalid email")
    }
// compare user enterd password and exist email's password    
const match = await bcrypt.compare(password,exist.password);
if(!match){
  return res.json("password not match")
}
// create token, if email, password correct
const token =jwt.sign({userId:exist.id},process.env.JWT_SECRET,{expiresIn:"1h"})
//sending token to client side
res.json({message:"login Sucessfull",token})

  }catch(e){
    console.error(e.message)
    res.json("something went wrong while login")
  }

});
// importing this function from this file 
const securityGuard=require('../Middleware/auth')

// Protected Routes , it goes to middlware(securityGuard) to verify the token 
router.get('/dashboard',securityGuard,(req,res)=>{
  res.json({message:`welcome User ${req.userId}`});

})




module.exports = router;
