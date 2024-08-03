import express from "express";
import User from '../models/userModel.js';
import bcrypt from "bcryptjs";
import generateTokenAndSetCookiee from "../utils/generateToken.js";

export const signup =async (req,res)=>{
   try {
    const {fullName,username, password,confirmPassword,gender} = req.body;
    if(password != confirmPassword){
        return res.status(400).json({error:"passwords do not match"})
    }

    const user = await User.findOne({username});

    if(user){
        return res.status(400).json({error:"user already exists"})
    }
    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    //placeholders profile
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilePic:gender ==='male'?boyProfilePic:girlProfilePic
    })

    if(newUser){
        //Generate a JWT Token here
        generateTokenAndSetCookiee(newUser._id,res);
        await newUser.save();
        res.status(201).json({
        _id:newUser._id,
        fullName:newUser.fullName,
        username:newUser.username,
        profilePic:newUser.profilePic
    })
    }


   } catch (error) {
    console.log("error occured while signup ",error.message);
    res.status(500).json({error:"Internal Server Error"})
   }
}
export const login = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		generateTokenAndSetCookiee(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// export const login = async (req,res)=>{
//     // console.log('loginUser')
//     try {
//         const {username,password} = req.body;
//         const user = await User.findOne({username})
//         const isPasswordCorrect = await bcrypt.compare(password,user.password||"");
//         if(!user || !isPasswordCorrect){
//             res.status(400).json({error:"Invalid Credintials"})
//         }
//         //if username and password are matched then
//         generateTokenAndSetCookiee(user._id,res);

//         res.status(200).json({
//             _id:user._id,
//             fullName:user.fullName,
//             username:user.username,
//             profilePic:user.profilePic,
//         })
//     } catch (error) {
//         console.log("Error occured while login",error.message);
//         res.status(500).json({error:"Internal server error"})
//     }

// } 

export const logout =  (req,res)=>{
  try {
    //logging out the user by removing jwt token
    res.cookie("jwt","",{maxAge:0});
    res.status(200).json({message:"Logged out successfully"})
  } catch (error) {
    console.log("Error occurred while logout" , error.message);
    res.status(500).json({
        error:"Internal server error"
    })
  }
}