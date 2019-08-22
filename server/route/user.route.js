const userSchema=require('../model/user.model');
const express=require('express');
const userRoute=express.Router();


userRoute.post('/register',(req,res)=>{
       if(req.body.length<=0)
{
    res.send("Error")
}
   let use =new userSchema({
       username:req.body.username,
       password:req.body.password
   })
   use.save().then(data=>{
       res.json("Saved new user")
       console.log(data)
   }).catch((err)=>{
       console.log(err);
       res.send(err);
   })

})

userRoute.post('/validate',(req,res)=>{
    
    userSchema.find(req.body).exec(async(err,document)=>{
         if(err)
         {
             res.json(err);
             console.log(err)
         }  
         else
         {
             let user=document;
             if(user.length <=0)
             {
                 res.statusCode=500;
                 res.statusMessage="user not found"
                 res.send("NOT FORUND")
             }
             else
             {
                 user[0].password=await null;
                 res.json(user);
             }
         }



    })
})

module.exports=userRoute;