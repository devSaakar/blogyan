import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import Login from "./Login";
import Loader from "../Loader";

const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        setCurrentUser(null);
        setLoading(false);
        return;
      }
      const token = await user.getIdToken();
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="loading"><Loader /></div>;
  }

  if (!currentUser) {
    return <Login />;
  } else {
    return <AuthContext.Provider value={{currentUser}}>{children}</AuthContext.Provider>;
  }
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
