const express = require('express')
const mongoose = require("mongoose")
const cors  = require("cors")
const app =express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/Crud",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Mongoose connected successfully");
  }).catch(err => {
    console.log("Mongoose connection error:", err);
  });
const UserSchema = new mongoose.Schema({
    name:String,
    email: String,
    age: String
})
const UserModel = mongoose.model("users",UserSchema)

app.get('/',(req,res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err));

})
app.get('/getuser/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id)
    UserModel.find({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err));


})
app.put('/update/:id',(req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndUpdate({_id:id}, {name: req.body.name,email: req.body.email,age: req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err));
})
app.post("/create",(req,res)=>{
    console.log("it is working")
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err));
})
app.delete("/deleteuser/:id",(req,res)=>{
    const id = req.params.id
    console.log(id)
    UserModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err));
})
app.listen('5121',()=>{
    console.log("Server is running")
});