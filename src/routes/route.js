const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", async function(req, res){
    let data= req.body
    let saveData= await UserModel.create(data)
    res.send({msg: saveData})
}  )

router.get("/getUsersData", async function(req, res){
    let allUsers= await UserModel.find()
    res.send({msg: saveData})})

module.exports = router;