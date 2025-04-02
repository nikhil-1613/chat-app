import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/userModel.js";

dotenv.config();

async function protectRoutes(req, res, next) {
    try {
        const token = req.cookies.jwt || req.headers.authorization?.split(" ")[1]; 

        if (!token) {
            // console.log("No token provided");
            return res.status(401).json({ error: "Unauthorized - No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log("Decoded JWT:", decoded); 

        // **FIX: Use decoded.id instead of decoded.user**
        const user = await User.findById(decoded.id).select("-password");
        // console.log("User Found in DB:", user);

        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }

        req.user = user;
        // cls

        next();
    } catch (error) {
        console.log("Error in middleware:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default protectRoutes;

// import express from "express";
// import jwt from "jsonwebtoken";
// import dotenv  from "dotenv";
// import User from "../models/userModel.js";
// dotenv.config();
// async function protectRoutes(req, res, next) {

//     try {
//         const token = req.cookies.jwt;
//         if (!token) {
//             return res.status(401).json({ error: "Unathaurozied - no token provided" });
//         }
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         if (!decoded) {
//             return res.status(401).json({ error: "Unauthourized- invalid token provided" });
//         }
//         //userId-must be changed to user in order to work
//         const user = await User.findById(decoded.user).select("-password");
//         if (!user) {
//             return res.status(401).json({ error: "User not found" });
//         }

//         //assigning user to user
//         req.user = user;
//         next();
//     } catch (error) {
//         console.log("Error occured in middleware");
//         res.status(500).json({ error: "Internal Server error" });
//     }
// }

// export default protectRoutes;

// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// import User from "../models/userModel.js";

// dotenv.config();

// async function protectRoutes(req, res, next) {
//     try {
//         const token = req.cookies.jwt || req.headers.authorization?.split(" ")[1]; 

//         if (!token) {
//             // console.log("No token provided");
//             return res.status(401).json({ error: "Unauthorized - No token provided" });
//         }

//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         // console.log("Decoded JWT:", decoded); 

//         // **FIX: Use decoded.id instead of decoded.user**
//         const user = await User.findById(decoded.id).select("-password");
//         // console.log("User Found in DB:", user);

//         if (!user) {
//             return res.status(401).json({ error: "User not found" });
//         }

//         req.user = user;
//         // cls

//         next();
//     } catch (error) {
//         console.log("Error in middleware:", error.message);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// }

// export default protectRoutes;

// // import express from "express";
// // import jwt from "jsonwebtoken";
// // import dotenv  from "dotenv";
// // import User from "../models/userModel.js";
// // dotenv.config();
// // async function protectRoutes(req, res, next) {

// //     try {
// //         const token = req.cookies.jwt;
// //         if (!token) {
// //             return res.status(401).json({ error: "Unathaurozied - no token provided" });
// //         }
// //         const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //         if (!decoded) {
// //             return res.status(401).json({ error: "Unauthourized- invalid token provided" });
// //         }
// //         //userId-must be changed to user in order to work
// //         const user = await User.findById(decoded.user).select("-password");
// //         if (!user) {
// //             return res.status(401).json({ error: "User not found" });
// //         }

// //         //assigning user to user
// //         req.user = user;
// //         next();
// //     } catch (error) {
// //         console.log("Error occured in middleware");
// //         res.status(500).json({ error: "Internal Server error" });
// //     }
// // }

// // export default protectRoutes;