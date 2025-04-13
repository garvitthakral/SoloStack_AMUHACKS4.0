import React, { createContext, useState, useEffect } from "react";
import api from "../api/axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await api.get("/user/me", { withCredentials: true });
        if (data.success) setUser(data.user);
      } catch (err) {
        console.error("Auto login failed:", err);
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
