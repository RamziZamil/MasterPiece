import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// Configure axios to always include credentials
axios.defaults.withCredentials = true;

export const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get(
            "http://localhost:5000/api/users/profile",
            {
              headers: { Authorization: `Bearer ${token}` },
              withCredentials: true,
            }
          );
          setUser(response.data.user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (token) => {
    localStorage.setItem("token", token);

    // Set the Authorization header for all future requests
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      const response = await axios.get(
        "http://localhost:5000/api/users/profile",
        { withCredentials: true }
      );
      setUser(response.data.user);
      setIsAuthenticated(true);
      return response.data.user; // Return user data for the caller to use
    } catch (error) {
      console.error("Login fetch error:", error);
      setIsAuthenticated(false);
      throw error; // Throw error to handle in the Login component
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    // Remove the Authorization header
    delete axios.defaults.headers.common["Authorization"];

    // Call the logout endpoint to clear the cookie
    axios
      .get("http://localhost:5000/api/auth/logout")
      .catch((err) => console.error("Logout error:", err));

    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
