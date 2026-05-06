const User = require("../models/user");

exports.registerUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json({message: "User Registered Successfully"});
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email, password});

        if(user){
            res.json({message: "Login Successful"});
        }else{
            res.status(400).json({message: "Invalid Credentials"});
        }
    } catch (error) {
        res.status(500).json(error);
    }
};