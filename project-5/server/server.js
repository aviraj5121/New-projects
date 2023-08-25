const express = require('express')
const app = express()
const cors= require("cors")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
app.get
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/Session-Mangement",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Mongoose connected successfully");
    }).catch(err => {
    console.log("Mongoose connection error:", err);
  });

const user = new mongoose.Schema({
    fname: String,
    lname: String,
    email: {type: String, unique:true},
    password: String
})
const UserModel = mongoose.model("usersData",user)

app.post('/create',(req,res)=>{
    const variable = req.body
    console.log(variable)
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err));
})
app.post('/login',async(req,res)=>{
    console.log(req.body)
    const user =await  UserModel.findOne({
        email:req.body.email,
        password:req.body.password,
    })
    if(user){
        const token = jwt.sign({user}, "you are getting jwt")
        console.log("okay true")
        res.send(user)
    }
    else{
        console.log("it is false")
    }
    
})
app.listen("5121",(req,res)=>{
    console.log("Sever is working")
})