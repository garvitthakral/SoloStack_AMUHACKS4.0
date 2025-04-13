import React from "react";
import api from "../../api/axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DonerForm = () => {
  const navigate = useNavigate();

  const handleBecomeDonor = async () => {
    try {
      const { data } = await api.patch("/user/become-donor", {}, { withCredentials: true });
      if (data.success) {
        toast.success("You are now a verified donor!");
        navigate("/dashboard");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex items-center justify-center px-6">
      <ToastContainer />
      <div className="bg-gray-800 p-10 rounded-2xl max-w-lg text-center shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-blue-500">Become a Donor</h1>
        <p className="text-gray-300 mb-6">
          Help others by sharing what you no longer need. Become a verified donor and upload clothes for those in need.
        </p>
        <button
          onClick={handleBecomeDonor}
          className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Verify Me as Donor
        </button>
      </div>
    </div>
  );
};

export default DonerForm ;
