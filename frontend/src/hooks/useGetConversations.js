import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        let isMounted = true; // Prevent setting state if unmounted

        const getConversations = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem("token"); // Ensure token exists
                
                // Dynamically set the API URL based on environment (local or production)
                const apiUrl = process.env.NODE_ENV === "production"
                    ? "https://your-backend-url.com/api/users"  // Replace with the production backend URL
                    : "http://localhost:5000/api/users"; // Local development URL
                
                const res = await fetch(apiUrl, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token ? `Bearer ${token}` : "" // Add JWT token if available
                    },
                    credentials: "include" // Ensures cookies (if any) are sent
                });

                if (!res.ok) {
                    const errorMessage = await res.text(); // Get detailed error response
                    throw new Error(`Error ${res.status}: ${errorMessage}`);
                }

                const data = await res.json();
                console.log('Fetched data:', data);

                if (isMounted) {
                    if (data.filteredUsers) {
                        setConversations(data.filteredUsers);
                    } else {
                        console.error("filteredUsers not found in response");
                    }
                }
            } catch (error) {
                console.error('Fetch error:', error);
                toast.error(`Failed to fetch conversations: ${error.message}`);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        getConversations();

        return () => {
            isMounted = false; // Cleanup to prevent state update after unmount
        };
    }, []);

    return { loading, conversations };
};

export default useGetConversations;

// import { useEffect, useState } from 'react';
// import toast from 'react-hot-toast';

// const useGetConversations = () => {
//     const [loading, setLoading] = useState(false);
//     const [conversations, setConversations] = useState([]);

//     useEffect(() => {
//         let isMounted = true; // Prevent setting state if unmounted

//         const getConversations = async () => {
//             setLoading(true);
//             try {
//                 const token = localStorage.getItem("token"); // Ensure token exists
                
//                 const res = await fetch("http://localhost:5000/api/users", {
//                     method: "GET",
//                     headers: {
//                         "Content-Type": "application/json",
//                         "Authorization": token ? `Bearer ${token}` : "" // Add JWT token if available
//                     },
//                     credentials: "include" // Ensures cookies (if any) are sent
//                 });

//                 if (!res.ok) {
//                     const errorMessage = await res.text(); // Get detailed error response
//                     throw new Error(`Error ${res.status}: ${errorMessage}`);
//                 }

//                 const data = await res.json();
//                 console.log('Fetched data:', data);

//                 if (isMounted) {
//                     if (data.filteredUsers) {
//                         setConversations(data.filteredUsers);
//                     } else {
//                         console.error("filteredUsers not found in response");
//                     }
//                 }
//             } catch (error) {
//                 console.error('Fetch error:', error);
//                 toast.error(`Failed to fetch conversations: ${error.message}`);
//             } finally {
//                 if (isMounted) {
//                     setLoading(false);
//                 }
//             }
//         };

//         getConversations();

//         return () => {
//             isMounted = false; // Cleanup to prevent state update after unmount
//         };
//     }, []);

//     return { loading, conversations };
// };

// export default useGetConversations;

// import { useEffect, useState } from 'react';
// import toast from 'react-hot-toast';

// const useGetConversations = () => {
//     const [loading, setLoading] = useState(false);
//     const [conversations, setConversations] = useState([]);

//     useEffect(() => {
//         let isMounted = true; // Track if the component is still mounted

//         const getConversations = async () => {
//             setLoading(true);
//             try {
//                 // Use the correct backend API URL (on port 5000)
//                 const res = await fetch("http://localhost:5000/api/users");
//                 if (!res.ok) {
//                     throw new Error(`Error: ${res.statusText}`);
//                 }
//                 const data = await res.json();
//                 console.log('Fetched data:', data); // Log the actual data

//                 if (isMounted) {
//                     // Ensure the structure of the response matches expectations
//                     if (data.filteredUsers) {
//                         setConversations(data.filteredUsers); // Adjust based on response structure
//                     } else {
//                         console.error("filteredUsers not found in response");
//                     }
//                 }
//             } catch (error) {
//                 console.error('Fetch error:', error); // Log error
//                 toast.error(`Failed to fetch data: ${error.message}`);
//             } finally {
//                 if (isMounted) {
//                     setLoading(false);
//                 }
//             }
//         };

//         getConversations();

//         return () => {
//             isMounted = false; // Cleanup function to mark the component as unmounted
//         };
//     }, []);

//     return { loading, conversations };
// };

// export default useGetConversations;

// // import { useEffect, useState } from "react";
// // import toast from "react-hot-toast";

// // const useGetConversations = () => {
// // 	const [loading, setLoading] = useState(false);
// // 	const [conversations, setConversations] = useState([]);

// // 	useEffect(() => {
// // 		const getConversations = async () => {
// // 			setLoading(true);
// // 			try {
// // 				const res = await fetch("http://localhost:3000/api/users"); // Updated port to 5000
// // 				const data = await res.json();
// // 				if (data.error) {
// // 					throw new Error(data.error);
// // 				}
// // 				setConversations(data);
// // 			} catch (error) {
// // 				toast.error(error.message);
// // 			} finally {
// // 				setLoading(false);
// // 			}
// // 		};

// // 		getConversations();
// // 	}, []);

// // 	return { loading, conversations };
// // };

// // export default useGetConversations;

// // import { useEffect, useState } from "react";
// // import toast from "react-hot-toast";

// // const useGetConversations = () => {
// // 	const [loading, setLoading] = useState(false);
// // 	const [conversations, setConversations] = useState([]);

// // 	useEffect(() => {
// // 		const getConversations = async () => {
// // 			setLoading(true);
// // 			try {
// // 				const res = await fetch("http://localhost:3000/api/users");
// // 				const data = await res.json();
// // 				if (data.error) {
// // 					throw new Error(data.error);
// // 				}
// // 				setConversations(data);
// // 			} catch (error) {
// // 				toast.error(error.message);
// // 			} finally {
// // 				setLoading(false);
// // 			}
// // 		};

// // 		getConversations();
// // 	}, []);

// // 	return { loading, conversations };
// // };
// // export default useGetConversations;

// import { useEffect, useState } from 'react';
// import toast from 'react-hot-toast';

// const useGetConversations = () => {
//     const [loading, setLoading] = useState(false);
//     const [conversations, setConversations] = useState([]);

//     useEffect(() => {
//         let isMounted = true; // Track if the component is still mounted

//         const getConversations = async () => {
//             setLoading(true);
//             try {
//                 const res = await fetch("api");
//                 if (!res.ok) {
//                     throw new Error(`Error: ${res.statusText}`);
//                 }
//                 const data = await res.json();
//                 // console.log('Fetched data:', data); // Log fetched data

//                 if (isMounted) {
//                     setConversations(data.filteredUsers); // Adjust based on response structure
//                 }
//             } catch (error) {
//                 console.error('Fetch error:', error); // Log error
//                 toast.error(`Failed to fetch data: ${error.message}`);
//             } finally {
//                 if (isMounted) {
//                     setLoading(false);
//                 }
//             }
//         };

//         getConversations();

//         return () => {
//             isMounted = false; // Cleanup function to mark the component as unmounted
//         };
//     }, []);

//     return { loading, conversations };
// };

// export default useGetConversations;
