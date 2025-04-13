import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { ToastContainer, toast } from "react-toastify";
import Loading from "./Loading";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleError = (err) => {
    toast.error(err, {
      position: "bottom-left",
    });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { data } = await api.post(
        "/signup",
        { ...inputValues },
        { withCredentials: true }
      );
      const { success, message } = data;
      if(success) {
        setInputValues({ email: "", name: "", password: "" });
        navigate("/");
        handleSuccess(message);
      }
    } catch (error) {
      handleError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return loading? <Loading /> : (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <ToastContainer />
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Create an Account
        </h2>

        <form className="space-y-4" onSubmit={handleOnSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              onChange={handleOnChange}
              type="text"
              className="mt-1 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              name="name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              onChange={handleOnChange}
              type="email"
              className="mt-1 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              name="email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
            name="password"
              onChange={handleOnChange}
              type="password"
              className="mt-1 w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white mt-6 py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <NavLink to={"/login"} className="text-blue-400 hover:underline">
            Log in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
