import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import api from "../../api/axios";
import { Link, NavLink } from "react-router-dom";
import Loading from "../Loading";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const DashBoard = () => {
  const { user } = useContext(UserContext);
  const [myCloths, setMyCloths] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMyCloths = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/cloths", { withCredentials: true });
        if (data.success) {
          const filtered = data.allCloths.filter(
            (c) => c.donor._id === user._id
          );
          setMyCloths(filtered);
        }
      } catch (err) {
        console.error("Error loading dashboard clothes:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.role === "donor") fetchMyCloths();
  }, [user]);

  return loading || !user ? (
    <Loading />
  ) : (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-6 md:px-20">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-6">Welcome, {user.name} 👋</h1>
          <p className="text-gray-400 mb-8">
            Here are the clothes you’ve donated:
          </p>
        </div>
        <div>
          <NavLink to={"/upload"}><AddCircleOutlineIcon /></NavLink>
        </div>

      </div>

      {myCloths.length === 0 ? (
        <p className="text-gray-500">You haven’t uploaded any clothes yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {myCloths.map((cloth) => (
            <div
              key={cloth._id}
              className="bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <img
                src={cloth.image}
                alt="cloth"
                className="h-40 w-full object-cover rounded mb-3"
              />
              <h2 className="font-semibold">{cloth.description}</h2>
              <p className="text-sm text-gray-400">Size: {cloth.size}</p>
              <Link
                to={`/cloth/${cloth._id}`}
                className="text-blue-400 text-sm mt-2 inline-block hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashBoard;
