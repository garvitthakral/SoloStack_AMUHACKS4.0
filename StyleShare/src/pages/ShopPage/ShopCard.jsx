import React from 'react'
import { Link } from "react-router-dom";

const ShopCard = ({ cloth }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={cloth.image}
        alt={cloth.description}
        className="w-full h-52 object-cover"
      />
      <div className="p-4 space-y-1">
        <h2 className="text-white font-semibold text-lg line-clamp-1">
          {cloth.description}
        </h2>
        <p className="text-sm text-gray-400">
          Size: {cloth.size} • {cloth.category} • {cloth.condition}
        </p>
        <Link
          to={`/cloth/${cloth._id}`}
          className="inline-block mt-2 text-blue-400 text-sm hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ShopCard