import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
// import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
	try {
		const { message } = req.body;
		const { id: recieverId } = req.params;
		const senderID = req.user._id;

		let conversation = await Conversation.findOne({
			participants: { $all: [senderID, recieverId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderID, recieverId],
			});
		}

		const newMessage = new Message({
			senderID,
			recieverId,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}
		// this will run in parallel
		await Promise.all([conversation.save(), newMessage.save()]);

		// SOCKET IO FUNCTIONALITY WILL GO HERE
		// const receiverSocketId = getReceiverSocketId(receiverId);
		// if (receiverSocketId) {
		// 	// io.to(<socket_id>).emit() used to send events to specific client
		// 	io.to(receiverSocketId).emit("newMessage", newMessage);
		// }

		res.status(201).json(newMessage);
	} catch (error) {
		console.log("Error in sendMessage controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};
// to get the messages between the logged in user and 
export const getMessage = async(req,res)=>{
    try {
        const {id:userToChatId}=req.params;
        const senderID=req.user._id;
        const conversation = await Conversation.findOne({
            participants:{$all:[senderID,userToChatId]},
            //populate message is resoponsible for creating a object of message between the logged in user and reciver user
        }).populate("messages");
        if(!conversation) res.status(200).json({});
        const messages = conversation.messages;
        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getting message:",error.message)
        res.status(500).josn({error:"Internal server error"});
    }
}

 