const express = require('express');
const app=express();
const bodyparser=require('body-parser');
const cors=require("cors");
const jwt=require('jsonwebtoken');
const TOKEN_KEY="21eqweeeeeeeeeeeeeeeeeeeeeeeeqwe21eq2ewq"

const db=require('./Database/connect.js');
const Users=require('./Database/model.js');
const { application } = require('express');


// console.log(resp);

const corsOptions ={
   origin:'*', 
   credentials:true,       
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 
app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.get('/',(req,res)=>{
    res.send("Hello");
})
app.post('/signup',async (req,res)=>{
    try {

        let data=await req.body.data;
        data=JSON.parse(data);
        console.log(data);
        const user=new Users({username:data.username,phone:data.phone,aadhar:data.aadhar,password:data.password});
        const resp= await user.save();
        if(resp){
            console.log("Successfully Saved");
        }else
        console.log("Error Occured "+resp);
    res.status(200).send("Success")
    } catch (error) {
        console.log(error);
        res.status(404).send(error);
    }
});

app.post('/login',async (req,res)=>{
    try {
        let data=await req.body.data;
        data=JSON.parse(data);
        console.log(data);
        
        const resp=await Users.findOne({phone:data.phone});
        
        if(resp){   
            if(resp.password===data.password)
            {
            const token=jwt.sign(
                { phone:data.phone,password:data.password},
                TOKEN_KEY,
                {
                  expiresIn: "2h",
                }
              );
            res.status(200).send(token);}
            else
            res.status(201).send("Invalid Credentials");
        }else{
            res.status(201).send("Invalid Credentials");

        }



    // res.status(200).send("Success")
    } catch (error) {
        console.log(error);
        res.status(404).send(error);
    }
});

app.listen(5000,(err)=>{
    if(!err)
    console.log("Connected Successfully");
    else
    console.log(err);
})