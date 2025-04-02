import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
});

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

const userSocketMap = {}; // {userId: socketId}

io.on("connection", (socket) => {
	console.log("a user connected", socket.id);

	const userId = socket.handshake.query.userId;
	if (userId != "undefined") userSocketMap[userId] = socket.id;

	// io.emit() is used to send events to all the connected clients
	io.emit("getOnlineUsers", Object.keys(userSocketMap));

	// socket.on() is used to listen to the events. can be used both on client and server side
	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
		delete userSocketMap[userId];
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});

export { app, io, server };

// import { Server } from "socket.io";
// import http from "http";
// import express from "express";

// const app = express();
// const server = http.createServer(app);

// const allowedOrigins =
//   process.env.NODE_ENV === "production"
//     ? ["https://yourdomain.com"]
//     : ["http://localhost:3000"]; // Make sure this matches frontend origin

// const io = new Server(server, {
//   cors: {
//     origin: allowedOrigins,
//     methods: ["GET", "POST"],
//   },
// });

// const userSocketMap = {}; // { userId: socketId }

// export const getReceiverSocketId = (receiverId) => {
//   return userSocketMap[receiverId];
// };

// io.on("connection", (socket) => {
//   console.log("✅ New user connected:", socket.id, "Query:", socket.handshake.query);

//   let userId = socket.handshake.query.userId; // Corrected query parameter name

//   if (!userId || userId === "undefined" || userId === "null") {
//     console.log("❌ Invalid userId received:", userId);
//     return;
//   }

//   console.log(`🔵 User Online - ID: ${userId}, Socket ID: ${socket.id}`);

//   // Store user's socket ID
//   userSocketMap[userId] = socket.id;
//   console.log("📌 Updated userSocketMap:", userSocketMap);

//   // Notify all users of the updated online users list
//   io.emit("getOnlineUsers", Object.keys(userSocketMap));
//   console.log("📢 Emitted getOnlineUsers event:", Object.keys(userSocketMap));

//   // Test event to check frontend connection
//   socket.emit("hello", "👋 Hello from server!");

//   // Handle incoming messages
//   socket.on("sendMessage", ({ senderId, receiverId, message }) => {
//     console.log(`📩 Message from ${senderId} to ${receiverId}: ${message}`);

//     const receiverSocketId = getReceiverSocketId(receiverId);
//     if (receiverSocketId) {
//       io.to(receiverSocketId).emit("newMessage", { senderId, message });
//       console.log(`✅ Message delivered to ${receiverId}, Socket ID: ${receiverSocketId}`);
//     } else {
//       console.log(`⚠️ Receiver (${receiverId}) not online.`);
//     }
//   });

//   // Handle user disconnection
//   socket.on("disconnect", () => {
//     console.log(`🔴 User disconnected - ID: ${userId}, Socket ID: ${socket.id}`);

//     if (userSocketMap[userId] === socket.id) {
//       delete userSocketMap[userId];
//       console.log(`🗑️ Removed user ${userId} from userSocketMap.`);
//     }

//     io.emit("getOnlineUsers", Object.keys(userSocketMap));
//     console.log("📢 Emitted getOnlineUsers event after disconnect:", Object.keys(userSocketMap));
//   });
// });

// export { app, io, server };
