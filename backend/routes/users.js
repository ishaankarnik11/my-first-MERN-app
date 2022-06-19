const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req,res)=>{
    console.log("users/ hit");
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json("Error: " + err));
});

router.route("/add").post((req,res)=>{
    const userName = req.body.userName;
    const newUser = new User({userName});

    newUser.save()
    .then(()=>res.json("user Added!"))
    .catch(err=>res.status(400).json("Error: " + err));
});

module.exports = router;