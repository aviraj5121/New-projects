const express = require('express')
const cros = require('cors')
const moongose = require('mongoose')
const { default: mongoose } = require('mongoose')
require('dotenv').config()
const app = express()
const mongo_url = process.env.Mongo_url

moongose.connect(mongo_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Mongoose connected successfully");
  }).catch(err => {
    console.error("Mongoose connection error:", err);
  });
app.get('/',(req,res)=>{
    res.send("hello")
})
//middle ware
app.use(cros())
app.use(express.json())






app.listen('5121',()=>{
    console.log("srver is running on port 5121")
})
