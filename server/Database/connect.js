const mongoose=require('mongoose');
const db=mongoose.connect('mongodb+srv://dhruvilshah:dhruvil@cluster0.mgo37.mongodb.net/roadconn?retryWrites=true&w=majority',
{
useNewUrlParser:true,
useUnifiedTopology:true})
.then(()=>{
    console.log('Connected Successfully Db');
}).catch((err)=>{
    console.log("Error in Db"+err);
})
module.exports=db;