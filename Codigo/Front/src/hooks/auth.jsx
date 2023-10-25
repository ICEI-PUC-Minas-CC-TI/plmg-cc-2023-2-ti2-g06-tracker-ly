import React, { useState } from "react";

export const LoginContext = React.createContext({});

export const LoginProvider = ({ children }) => {
  const [loginAuth, setLoginAuth] = useState(false);
  const [userData, setUserData] = useState();

  // receber info do user
  const readUserData = () => {
    const dataUser = localStorage.getItem("user");

    if (dataUser) {
      setLoginAuth(true);
      setUserData(JSON.parse(dataUser));
    }
  };

  // poe user info no local
  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify(userData));
    readUserData();
  };

  // logout do user/remode user data do local
  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoginAuth(false);
    setUserData(undefined);
  };

  return (
    <LoginContext.Provider
      value={{
        loginAuth,
        userData,
        handleLogin,
        handleLogout,
        readUserData
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => React.useContext(LoginContext);
