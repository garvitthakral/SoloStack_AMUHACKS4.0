import React from "react";
import { toast } from "react-toastify";

const Footer = () => {
  const handleFeedback = (e) => {
    e.preventDefault();
    toast.success("Feedback sent!", {
      position: "bottom-center",
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex-col items-center justify-center">
          <img
            src="https://res.cloudinary.com/dtntjxdio/image/upload/v1744565923/logo1_u0cqd7.png"
            alt=""
            className="h-70"
          />
          <p className="text-sm text-gray-400">
            Style with empathy. Share with love.
          </p>
        </div>

        <div className="flex-col px-40">
          <h2 className="text-lg font-semibold text-white mb-4">
            Send us feedback
          </h2>
          <form className="space-y-3" onSubmit={handleFeedback}>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        Made with ❤️ to spread warmth & dignity — StyleShare ©{" "}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
