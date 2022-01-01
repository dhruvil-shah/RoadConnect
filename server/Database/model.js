const mongoose=require('mongoose');
const schema =mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    aadhar:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const Users=mongoose.model("users",schema);
module.exports=Users;
