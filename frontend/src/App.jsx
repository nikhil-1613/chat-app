import Sidebar from "./components/sidebar/Sidebar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/SignUp"


function App() {

  return (
    <>
  <div className="p-4 h-screen flex items-center justify-center">
    {/* <Login/> */}
    <Home/>
  </div>
    </>
  )
}

export default App
