import React from 'react'
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Style with Kindness 👕
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Donate clothes you no longer need, and help someone choose styles they love — with dignity, for free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <NavLink
              to="/donator"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
            >
              Start Donating
            </NavLink>
            <NavLink
              to="/shop"
              className="border border-blue-600 text-blue-400 px-6 py-3 rounded-lg text-lg hover:bg-blue-600 hover:text-white transition"
            >
              Browse Clothes
            </NavLink>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/892/892458.png"
            alt="Clothes Donation"
            className="w-full max-w-md mx-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero