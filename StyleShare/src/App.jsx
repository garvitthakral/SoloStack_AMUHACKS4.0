import React, { useContext } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/LandingPage/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/AboutPage/About";
import DashBoard from "./pages/BecomeDoner/DashBoard";
import Shop from "./pages/ShopPage/Shop";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import ClothDetail from "./pages/ShopPage/ClothDetail";
import DonerForm from "./pages/BecomeDoner/DonerForm";
import Upload from "./pages/BecomeDoner/Upload";
import { UserContext } from "./context/UserContext";
import Loading from "./pages/Loading";

function App() {
  const { loading } = useContext(UserContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/donator" element={<DonerForm />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cloth/:id" element={<ClothDetail />} />
          <Route path="/dasboard" element={<DashBoard />} />
          <Route path="/upload" element={<Upload />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh]">
        <Outlet /> {/* 👈 This is where your routed page will render */}
      </main>
      <Footer />
    </>
  );
};
