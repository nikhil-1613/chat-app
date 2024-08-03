import { createContext, useEffect, useState, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();
export const useSocketContext = () => {
  return useContext(SocketContext);
};

const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const authUser = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socketInstance = io("http://localhost:5000", {
        query: {
          userId: { userId: authUser._id },
        },
      });

      setSocket(socketInstance);
      //socket.io() is used to listen the events can be used to listen on both server and client side
      socketInstance.on("onlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => {
        socketInstance.close();
        setSocket(null);
      };
    } else if (socket) {
      socket.close();
      setSocket(null);
    }
  }, [authUser]); // Remove 'socket' from the dependency array

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;

// import { createContext, useEffect, useState } from "react";
// import { useAuthContext } from "./AuthContext";
// import io from "socket.io-client";

// export const SocketContext = createContext();

// const SocketContextProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const authUser = useAuthContext();

//   useEffect(() => {
//     if (authUser) {
//       const socketInstance = io("http://localhost:5000");
//       setSocket(socketInstance);

//       socketInstance.on("onlineUsers", (users) => {
//         setOnlineUsers(users);
//       });

//       return () => {
//         socketInstance.close();
//         setSocket(null);
//       };
//     } else {
//       if (socket) {
//         socket.close();
//         setSocket(null);
//       }
//     }
//   }, [authUser, socket]);

//   return (
//     <SocketContext.Provider value={{ socket, onlineUsers }}>
//       {children}
//     </SocketContext.Provider>
//   );
// };

// export default SocketContextProvider;
