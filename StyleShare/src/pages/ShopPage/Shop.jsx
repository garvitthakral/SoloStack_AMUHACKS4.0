import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import ShopCard from "./ShopCard";

const Shop = () => {
  const [allCloths, setAllCloths] = useState([]);

  useEffect(() => {
    const fetchCloths = async () => {
      try {
        const { data } = await api.get("/cloths/");
        if (data.success) {
          setAllCloths(data.allCloths);
        }
      } catch (err) {
        console.error("Error fetching clothes:", err);
      }
    };
    fetchCloths();
  }, []);

  return (
    <>      
      <div className="bg-gray-900 min-h-screen py-10 px-6 md:px-12">
        <h1 className="text-white text-3xl font-bold mb-8 text-center">
          All Clothes
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allCloths.map((cloth) => (
            <ShopCard key={cloth._id} cloth={cloth} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
