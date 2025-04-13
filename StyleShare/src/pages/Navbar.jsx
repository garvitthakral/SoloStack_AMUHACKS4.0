import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(); // or navigate to login
  };
  
  return (
    <div className="px-40  bg-gray-800 shadow-2xl">
      <div className=" flex justify-between text-lg font-semibold">
        <div>
          <img
            src="https://res.cloudinary.com/dtntjxdio/image/upload/v1744565922/words_mcljxa.png"
            alt=""
            className="h-30"
          />
        </div>
        <div className=" flex gap-6 py-10">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/donator"}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-300"
            }
          >
            Become A Donator
          </NavLink>
          <NavLink
            to={"/shop"}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-300"
            }
          >
            Shop
          </NavLink>
          <NavLink
            to={"/signup"}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-300"
            }
          >
            Sign up
          </NavLink>
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-300"
            }
          >
            Log in
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
