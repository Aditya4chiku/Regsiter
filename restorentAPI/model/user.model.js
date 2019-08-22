const mongoose =require('mongoose');
const UserScheam=mongoose.Schema({
    user_id:{type:String,require:true},
    username:{type:String,require:true},
    password:String
});

module.exports=mongoose.model('user',UserScheam,'USERS');