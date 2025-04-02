import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "../backend/routes/authRoutes.js";
import messageRoutes from "../backend/routes/messageRoutes.js";
import userRoutes from "../backend/routes/userRoutes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 5000;

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS settings (Allows both local & deployed frontend)
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL || "http://localhost:3000",
//     credentials: true,
//   })
// );

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api", userRoutes);

// Serve frontend build files (Fix for Render Deployment)
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"), (err) => {
    if (err) {
      res.status(500).send("Frontend build not found.");
    }
  });
});

// Start the server
server.listen(PORT, () => {
  connectToMongoDB();
  console.log(` Server running on http://localhost:${PORT}`);
});

// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import authRoutes from "../backend/routes/authRoutes.js";
// import messageRoutes from "../backend/routes/messageRoutes.js";
// import userRoutes from "../backend/routes/userRoutes.js";
// import connectToMongoDB from "./db/connectToMongoDB.js";
// import { app, server } from "./socket/socket.js";
// import cors from "cors";
// import path from "path";
// import { fileURLToPath } from "url";

// dotenv.config();
// const PORT = process.env.PORT || 5000;

// // Fix for __dirname in ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: "http://localhost:3000", // Allow frontend to make requests
//     credentials: true, // Allow sending cookies and authorization headers
//   })
// );

// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api", userRoutes);

// // Serve frontend build files
// app.use(express.static(path.join(__dirname, "frontend", "dist")));


// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

// server.listen(PORT, () => {
//   connectToMongoDB();
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
