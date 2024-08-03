import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
		</div>
	);
};
export default Conversations;

// STARTER CODE SNIPPET
// import Conversation from "./Conversation";

// const Conversations = () => {
// 	return (
// 		<div className='py-2 flex flex-col overflow-auto'>
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 		</div>
// 	);
// };
// export default Conversations;




// import React from 'react'
// import Conversation from './Conversation'
// import useGetConversations from '../../hooks/useGetConversations'
// import { getRandomEmoji } from '../../utils/emojis';

// export default function Conversations() {
//   const {loading,conversations} = useGetConversations();
//   console.log("conversations are:",conversations)
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         {
//           conversations.map((conversation)=>{
//             <Conversation
//             key={conversation._id}
//             conversation={conversation}
//             emoji = {getRandomEmoji}
//             lastIdx= {idx === conversations.length-1}
//             />
//           })
//         }
//     </div>
//   )
// }


// //starter code
// // import React from 'react'
// // import Conversation from './Conversation'

// // export default function Conversations() {
// //   return (
// //     <div className='py-2 flex flex-col overflow-auto'>
// //         <Conversation/>
// //         <Conversation/>
// //         <Conversation/>
// //     </div>
// //   )
// // }
