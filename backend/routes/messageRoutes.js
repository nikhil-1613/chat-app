import express from "express";

import protectRoute from "../middleware/protectRoutes.js";
// import Conversation from "../models/conversationModel.js";
import { getMessages, sendMessage } from "../controllers/messageControllers.js";


const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;

// import express from "express";
// import { getMessage, sendMessage } from "../controllers/messageControllers.js";
// import protectRoutes from "../middleware/protectRoutes.js";

// const router = express.Router();

// router.get('/:id',protectRoutes,getMessage)
// router.post("/send/:id",protectRoutes,sendMessage)
// export default router