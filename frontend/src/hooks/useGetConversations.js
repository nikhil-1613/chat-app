import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        let isMounted = true; // Track if the component is still mounted

        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/users");
                if (!res.ok) {
                    throw new Error(`Error: ${res.statusText}`);
                }
                const data = await res.json();
                console.log('Fetched data:', data); // Log fetched data

                if (isMounted) {
                    setConversations(data.filteredUsers); // Adjust based on response structure
                }
            } catch (error) {
                console.error('Fetch error:', error); // Log error
                toast.error(`Failed to fetch data: ${error.message}`);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        getConversations();

        return () => {
            isMounted = false; // Cleanup function to mark the component as unmounted
        };
    }, []);

    return { loading, conversations };
};

export default useGetConversations;

// import  { useEffect, useState } from 'react';
// import toast from 'react-hot-toast';
// const useGetConversations = () =>{
//     const [loading,setLoading] = useState(false);
//     const [conversations, setConversations] = useState([]);
//     useEffect(()=>{
//         const getConversations = async()=>{
//             setLoading(true);
//             try {
//                 const res = await fetch("/api/users");
//                 if (!res.ok) {
//                     throw new Error(`Error: ${res.statusText}`);
//                 }
//                 const data = await res.json()

//                 if(data.error){
//                     throw new Error(data.error)
//                 }
//                 setConversations(data);
//             } catch (error) {
//                 toast.error(error.message)
//             }
//         }
//         getConversations();
//     },[])

//    return (
//     {loading,conversations}
//   )
// }
//  export default useGetConversations