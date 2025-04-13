import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const ClothDetail = () => {
  const { id } = useParams();
  const [cloth, setCloth] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCloth = async () => {
        setLoading(true);
      try {
        const { data } = await api.get(`/cloths/${id}`);
        if (data.success) {
          setCloth(data.aCloth);
        }
      } catch (error) {
        console.error("Failed to load cloth:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCloth();
  }, [id]);

  return loading || !cloth ? (
    <Loading />
  ) : (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row gap-10">
        <img
          src={cloth.image}
          alt={cloth.description}
          className="w-full md:w-1/2 object-cover rounded-xl"
        />
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold">{cloth.description}</h2>
          <p><span className="text-gray-400">Size:</span> {cloth.size}</p>
          <p><span className="text-gray-400">Category:</span> {cloth.category}</p>
          <p><span className="text-gray-400">Condition:</span> {cloth.condition}</p>
          {cloth.donor && (
            <div className="mt-4">
              <h4 className="font-semibold text-blue-400">Donor Info</h4>
              <p className="text-sm text-gray-300">Name: {cloth.donor.name}</p>
              <p className="text-sm text-gray-300">Email: {cloth.donor.email}</p>
            </div>
          )}
          <Link
            to="/shop"
            className="inline-block mt-6 text-blue-500 hover:underline"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClothDetail;
