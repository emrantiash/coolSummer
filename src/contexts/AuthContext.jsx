import React, { createContext, useState } from "react";

// Create the authentication context
export const AuthContext = createContext();

// Create a provider component to wrap the app and provide the context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to log in the user
  const login = (userCredentials) => {
    // Perform login logic, e.g., send API request
    // Update the user and isAuthenticated state
    setUser(userCredentials.email);
    if (userCredentials.email === "" && userCredentials.password === "") {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  };

  // Function to log out the user
  const logout = () => {
    // Perform logout logic, e.g., send API request
    // Clear the user and isAuthenticated state
    setUser(null);
    setIsAuthenticated(false);
  };

  // Value object to be provided by the context
  const authContextValue = {
    user,
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
