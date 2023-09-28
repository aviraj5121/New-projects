const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10)
const key = 'Aviraj'
mongoose.connect("mongodb://127.0.0.1:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Mongoose connected successfully");
}).catch(err => {
    console.log("Mongoose connection error:", err);
});
app.use(cors({credentials: true,origin: 'http://localhost:3000',}));

app.use(express.json())
app.use(cookieParser());
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    hashpasword: String
})
const UserModel = mongoose.model("users", UserSchema)
app.listen("5121", () => {
    console.log("server is running on port 5121")
})




app.post("/register", async (req, res) => {
    console.log(req.body.values)
    const username = req.body.values.username
    const email = req.body.values.Email
    const password = req.body.values.password
    const hashpasword = bcrypt.hashSync(password, salt)

    const users = await UserModel.find({ username: username })
    console.log(username)
    if (users.length > 0) {
        res.json("username exsit")
    }
    const newUser = new UserModel({
        username,
        email,
        hashpasword,
    });
    await newUser.save().then(users => res.json(users))
        .catch(err => res.json(err));
})
app.post("/login", async (req, res) => {
    const username = req.body.values.username
    const password = req.body.values.password
    const users = await UserModel.findOne({ username: username })
    if (users != null) {
        console.log("username:" + users)
        const check = await bcrypt.compare(password, users.hashpasword)
        console.log(check)
        if (check) {
                jwt.sign({ username, id: users._id }, key,{},(err,token)=>{
                if (err) throw err;
                res.cookie('token', token).json(token).status(200);
            });
        }
        else {
            res.status(400).json("wrong password")
        }
    }else {
        res.send("User not found")
    }
})

app.get('/profile',async(req,res)=>{
        res.json(req.cookies)
    

})