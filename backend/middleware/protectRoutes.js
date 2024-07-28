import express from "express";
import jwt from "jsonwebtoken";
import dotenv  from "dotenv";
import User from "../models/userModel.js";
const protectRoutes = async(req,res,next)=>{
    dotenv.config();
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unathaurozied - no token provided"})
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({error:"Unauthourized- invalid token provided"})
        }
        //userId-must be changed to user in order to work
        const user = await User.findById(decoded.user).select("-password")
        if(!user){
            return res.status(401).json({error:"User not found"})
        }

        //assigning user to user

        req.user =  user;
        next();
    } catch (error) {
        console.log("Error occured in middleware");
        res.status(500).json({error:"Internal Server error"})
    }
}

export default protectRoutes;