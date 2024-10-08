import { Toaster } from "react-hot-toast";
// import Sidebar from "./components/sidebar/Sidebar"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const {authUser} = useAuthContext();
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Toaster />
        <Routes>
          <Route path="/" element={authUser? <Home />: <Navigate to={'/login'}/>} />
          <Route path="/signup" element={authUser?<Navigate to='/'/>:<Signup/>} />
          <Route path="/login" element={authUser?<Navigate to='/'/>:<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
