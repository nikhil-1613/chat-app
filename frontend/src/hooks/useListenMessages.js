
import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from '../assets/sounds/notification.mp3';

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play().catch(error => {
                console.error("Audio play failed", error);
            });
            setMessages([...messages, newMessage]);
        });

        return () => socket?.off("newMessage");
    }, [socket, messages, setMessages]);
};

export default useListenMessages;
// import { useEffect } from "react";
// import { useSocketContext } from "../context/SocketContext";
// import useConversation from "../zustand/useConversation";
// import notificationSound from '../assets/sounds/notification.mp3';
// const useListenMessgaes = () =>{
// const {socket}= useSocketContext();
// const {messgaes,setMessages} = useConversation();

// useEffect(()=>{
//     socket?.on("newMessage",(newMessage)=>{
//         newMessage.shouldShake=true;
//         const sound = new Audio(notificationSound);
//         sound.play();
//         setMessages([...messgaes,newMessage])
//     })

//     return () => socket?.off("newMessage")
// },[])
// }
// export default useListenMessgaes;