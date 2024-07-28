import jwt from "jsonwebtoken";

const generateTokenAndSetCookiee = (user,res)=>{
    const token = jwt.sign({user},process.env.JWT_SECRET,{
        expiresIn:'2h'
    });
    res.cookie("jwt",token,{
        maxAge: 2*60*60*1000,// 2 hours in milliseconds
        httpOnly:true,//prevent XSS attacks and cross-site scripting attacks
        sameSite :"strict", //CSRF attacks and cross-site attacks and forgery attacks
        secure: process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndSetCookiee;