const bcrypt=require("bcrypt")
const { RegisterModel } = require("../models/user.model");
const jwt = require("jsonwebtoken")


const register = (req,res)=>{
    const{name,email,gender,password,age,city}=req.body;
    bcrypt.hash(password, 8 ,(err,secured_password)=>{
        if(err){
            console.log(err)
        }
        else
        {
            try{
                const userData=RegisterModel({name,email,gender,password:secured_password,age,city});
                userData.save();
                console.log("Users has been registered")
                res.send("Users has been registerd")
            }
            catch(err){
                console.log(err)
                res.send(err)
            }
        }
    }) 
}

const login= (req,res)=>{
    const{email,password}= req.body
    RegisterModel.find({email}).then(userData=>{
        if(!userData){
            res.send("Users not registerd")
        }else{
            bcrypt.compare(password,userData[0].password,(err, matched_password)=>{
                if(!matched_password){
                    console.log(err);
                    res.send("Password is not matching")
                }else{
                    const token= jwt.sign(password,"linkdinApp");
                    res.send({"mssg":"successfully login",token})
                    console.log("Succesfully Log In");
                }
            })
        }
    })
}

module.exports={
    register,login
}