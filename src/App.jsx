import Home from "./Pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Player from "./Pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./Components/Firebass/Firebass";
import { ToastContainer } from "react-toastify";
ToastContainer;
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/");
        // console.log("Logged in");
      } else {
        // console.log("Logged out");
        navigate("/login");
      }
    });
  }, []);
  return (
    <div>
      <ToastContainer theme="dark" autoClose={1000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
