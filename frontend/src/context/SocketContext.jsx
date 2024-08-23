import { createContext, useEffect, useState, useContext } from "react";
import io from "socket.io-client";
import { useAuthContext } from "./AuthContext";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const authUser = useAuthContext();

  useEffect(() => {
    if (authUser && authUser._id) {
      console.log(`Connecting to socket server with user ID: ${authUser._id}`);

      const socketInstance = io("http://localhost:5000", {
        query: { userId: authUser._id },
      });

      setSocket(socketInstance);

      socketInstance.on("getOnlineUsers", (users) => {
        console.log("Received updated online users list:", users);
        setOnlineUsers(users);
      });

      socketInstance.on("connect", () => {
        console.log("Socket connected:", socketInstance.id);
      });

      socketInstance.on("disconnect", () => {
        console.log("Socket disconnected:", socketInstance.id);
      });

      return () => {
        console.log("Disconnecting socket for user ID:", authUser._id);
        socketInstance.close();
        setSocket(null);
      };
    } else if (socket) {
      console.log("No authUser found. Closing existing socket connection.");
      socket.close();
      setSocket(null);
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;

// import { createContext, useEffect, useState, useContext } from "react";
// import { useAuthContext } from "./AuthContext";
// import io from "socket.io-client";

// const SocketContext = createContext();
// export const useSocketContext = () => {
//   return useContext(SocketContext);
// };

// const SocketContextProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const authUser = useAuthContext();

//   useEffect(() => {
//     if (authUser) {
//       const socketInstance = io("http://localhost:5000", {
//         query: {
//           userId: { userId: authUser._id },
//         },
//       });

//       setSocket(socketInstance);
//       //socket.io() is used to listen the events can be used to listen on both server and client side
//       socketInstance.on("getOnlineUsers", (users) => {
//         setOnlineUsers(users);
//       });

//       return () => {
//         socketInstance.close();
//         setSocket(null);
//       };
//     } else if (socket) {
//       socket.close();
//       setSocket(null);
//     }
//   }, [authUser]); 

//   return (
//     <SocketContext.Provider value={{ socket, onlineUsers }}>
//       {children}
//     </SocketContext.Provider>
//   );
// };

// export default SocketContextProvider;
