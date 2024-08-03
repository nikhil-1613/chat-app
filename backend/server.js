import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
//routes importing
import authRoutes from '../backend/routes/authRoutes.js';
import messageRoutes from '../backend/routes/messageRoutes.js';
import userRoutes from '../backend/routes/userRoutes.js';
//connection importing
import connectToMongoDB from "./db/connectToMongoDB.js";
//importing socket.io server
import {app,server} from './socket/socket.js'

// const app= express();
dotenv.config();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cookieParser());
//authRoutes
app.use('/api/auth',authRoutes)
//messagingRoutes
app.use('/api/messages',messageRoutes)
//userRoutes
app.use('/api',userRoutes);

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`)
})