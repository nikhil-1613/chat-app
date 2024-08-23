import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();

  // console.log(`Checking online status for user ID: ${conversation._id}`);
  // console.log("Current online users:", onlineUsers);

  const isOnline = onlineUsers.includes(conversation._id);
  // console.log(`User ${conversation._id} is ${isOnline ? "online" : "offline"}`);

  const handleConversationClick = () => {
    console.log(`Conversation selected: ${conversation._id} - ${conversation.username}`);
    setSelectedConversation(conversation);
  };

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
        ${isSelected ? "bg-sky-500" : ""}
      `}
        onClick={handleConversationClick}
      >
        <div className="relative">
          <div className="w-12 rounded-full overflow-hidden">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
          {isOnline && (
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
          )}
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.username}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;


// last working conditon import { useSocketContext } from "../../context/SocketContext";
// import useConversation from "../../zustand/useConversation";

// const Conversation = ({ conversation, lastIdx, emoji }) => {
//   const { selectedConversation, setSelectedConversation } = useConversation();
  
//   // Determine if this conversation is the currently selected one
//   const isSelected = selectedConversation?._id === conversation._id;

//   // Get the list of online users from the SocketContext
//   const { onlineUsers } = useSocketContext();

//   // Log the current conversation's user ID and the online status
//   console.log(`Checking online status for user ID: ${conversation._id}`);
//   const isOnline = onlineUsers.includes(conversation._id);
//   console.log(`User ${conversation._id} is ${isOnline ? "online" : "offline"}`);

//   // Log the selected conversation details when clicked
//   const handleConversationClick = () => {
//     console.log(`Conversation selected: ${conversation._id} - ${conversation.username}`);
//     setSelectedConversation(conversation);
//   };

//   return (
//     <>
//       <div
//         className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
//         ${isSelected ? "bg-sky-500" : ""}
//       `}
//         onClick={handleConversationClick}
//       >
//         <div className={`avatar ${isOnline ? "online" : ""}`}>
//           <div className='w-12 rounded-full'>
//             <img src={conversation.profilePic} alt='user avatar' />
//           </div>
//         </div>

//         <div className='flex flex-col flex-1'>
//           <div className='flex gap-3 justify-between'>
//             <p className='font-bold text-gray-200'>{conversation.username}</p>
//             <span className='text-xl'>{emoji}</span>
//           </div>
//         </div>
//       </div>

//       {!lastIdx && <div className='divider my-0 py-0 h-1' />}
//     </>
//   );
// };

// export default Conversation;

//2nd version
// import { useSocketContext } from "../../context/SocketContext";
// import useConversation from "../../zustand/useConversation";

// const Conversation = ({ conversation, lastIdx, emoji }) => {
//   const { selectedConversation, setSelectedConversation } = useConversation();
//   const isSelected = selectedConversation?._id === conversation._id;
//   const { onlineUsers } = useSocketContext();
//   const isOnline = onlineUsers.includes(conversation._id);

//   return (
//     <>
//       <div
//         className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
//         ${isSelected ? "bg-sky-500" : ""}
//       `}
//         onClick={() => setSelectedConversation(conversation)}
//       >
//         <div className={`avatar ${isOnline ? "online" : ""}`}>
//           <div className='w-12 rounded-full'>
//             <img src={conversation.profilePic} alt='user avatar' />
//           </div>
//         </div>

//         <div className='flex flex-col flex-1'>
//           <div className='flex gap-3 justify-between'>
//             <p className='font-bold text-gray-200'>{conversation.username}</p>
//             <span className='text-xl'>{emoji}</span>
//           </div>
//         </div>
//       </div>

//       {!lastIdx && <div className='divider my-0 py-0 h-1' />}
//     </>
//   );
// };

// export default Conversation;
//1st version
// import { useSocketContext } from "../../context/SocketContext";
// import useConversation from "../../zustand/useConversation";

// const Conversation = ({ conversation, lastIdx, emoji }) => {
// 	const { selectedConversation, setSelectedConversation } = useConversation();

// 	const isSelected = selectedConversation?._id === conversation._id;
// 	const { onlineUsers } = useSocketContext();
// 	const isOnline = onlineUsers.includes(conversation._id);

// 	return (
// 		<>
// 			<div
// 				className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
// 				${isSelected ? "bg-sky-500" : ""}
// 			`}
// 				onClick={() => setSelectedConversation(conversation)}
// 			>
// 				<div className={`avatar ${isOnline ? "online" : ""}`}>
// 					<div className='w-12 rounded-full'>
// 						<img src={conversation.profilePic} alt='user avatar' />
// 					</div>
// 				</div>

// 				<div className='flex flex-col flex-1'>
// 					<div className='flex gap-3 justify-between'>
// 						<p className='font-bold text-gray-200'>{conversation.username}</p>
// 						<span className='text-xl'>{emoji}</span>
// 					</div>
// 				</div>
// 			</div>

// 			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
// 		</>
// 	);
// };
// export default Conversation;

