import { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState(""); // Store debounced value
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	// Debounce logic: Update `debouncedSearch` after 300ms
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearch(search);
		}, 300);

		return () => {
			clearTimeout(handler); // Cleanup previous timeout
		};
	}, [search]);

	useEffect(() => {
		if (debouncedSearch.length >= 3) {
			const conversation = conversations.find((c) =>
				c.fullName.toLowerCase().trim().includes(debouncedSearch.toLowerCase().trim())
			);

			if (conversation) {
				setSelectedConversation(conversation);
			} else {
				toast.error("No such user found!");
			}
		}
	}, [debouncedSearch, conversations, setSelectedConversation]);

	return (
		<form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
			<input
				type="text"
				placeholder="Search…"
				className="input input-bordered rounded-full"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type="submit" className="btn btn-circle bg-sky-500 text-white">
				<IoSearchSharp className="w-6 h-6 outline-none" />
			</button>
		</form>
	);
};

export default SearchInput;

// import { useState } from "react";
// import { IoSearchSharp } from "react-icons/io5";
// import useConversation from "../../zustand/useConversation";
// import useGetConversations from "../../hooks/useGetConversations";
// import toast from "react-hot-toast";

// const SearchInput = () => {
//     const [search, setSearch] = useState("");
//     const { setSelectedConversation } = useConversation();
//     const { conversations } = useGetConversations();

//     console.log("Conversations:", conversations); // Debugging: check if data exists

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!search) return;

//         if (search.length < 3) {
//             return toast.error("Search term must be at least 3 characters long");
//         }

//         if (!conversations || conversations.length === 0) {
//             return toast.error("No conversations available!");
//         }

//         const conversation = conversations.find((c) =>
//             c.fullName.toLowerCase().trim().includes(search.toLowerCase().trim())
//         );

//         if (conversation) {
//             setSelectedConversation(conversation);
//             setSearch("");
//         } else {
//             toast.error("No such user found!");
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className='flex items-center gap-2'>
//             <input
//                 type='text'
//                 placeholder='Search…'
//                 className='input input-bordered rounded-full'
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//             />
//             <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
//                 <IoSearchSharp className='w-6 h-6 outline-none' />
//             </button>
//         </form>
//     );
// };

// export default SearchInput;

// import { useState } from "react";
// import { IoSearchSharp } from "react-icons/io5";
// import useConversation from "../../zustand/useConversation";
// import useGetConversations from "../../hooks/useGetConversations";
// import toast from "react-hot-toast";

// const SearchInput = () => {
// 	const [search, setSearch] = useState("");
// 	const { setSelectedConversation } = useConversation();
// 	const { conversations } = useGetConversations();

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		if (!search) return;
// 		if (search.length < 3) {
// 			return toast.error("Search term must be at least 3 characters long");
// 		}

// 		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

// 		if (conversation) {
// 			setSelectedConversation(conversation);
// 			setSearch("");
// 		} else toast.error("No such user found!");
// 	};
// 	return (
// 		<form onSubmit={handleSubmit} className='flex items-center gap-2'>
// 			<input
// 				type='text'
// 				placeholder='Search…'
// 				className='input input-bordered rounded-full'
// 				value={search}
// 				onChange={(e) => setSearch(e.target.value)}
// 			/>
// 			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
// 				<IoSearchSharp className='w-6 h-6 outline-none' />
// 			</button>
// 		</form>
// 	);
// };
// export default SearchInput;
