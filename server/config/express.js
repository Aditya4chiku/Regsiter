const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const userRoute=require('../route/user.route')
const app=express();
app.use(bodyParser.json());
app.use(cors());



app.get('/',(req,res)=>{
    res.send("I m server");
})

module.exports=app;