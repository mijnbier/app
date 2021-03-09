import React, { useState, useEffect, createContext } from "react";
import { auth } from "../Services/auth";

export const UserContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser({
          id: user.uid,
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
