import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/LandingPage/Home";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/AboutPage/About";
import Doner from "./pages/BecomeDoner/Doner";
import Shop from "./pages/ShopPage/Shop";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/donator" element={<Doner />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
