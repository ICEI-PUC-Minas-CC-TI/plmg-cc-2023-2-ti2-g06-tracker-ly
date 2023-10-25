import React, { useState, useEffect } from "react";

export const LoginContext = React.createContext({});

export const LoginProvider = ({ children }) => {
  const [loginAuth, setLoginAuth] = useState(false);
  const [userData, setUserData] = useState();

  console.log(loginAuth);
  console.log(userData);

  // receber info do user
  const readUserData = () => {
    try {
        const dataUser = localStorage.getItem("user");
        setUserData(JSON.parse(dataUser));
        setLoginAuth(true);
    } catch(e) {}
  };

  // poe user info no local
  const handleLogin = (param) => {
    localStorage.setItem("user", JSON.stringify(param));
    readUserData();
  };

  // logout do user/remode user data do local
  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoginAuth(false);
    setUserData(undefined);
  };

  // mantem o login quando a página atualiza
  useEffect(() => {
    readUserData();
  },[]);

  return (
    <LoginContext.Provider
      value={{
        loginAuth,
        userData,
        setUserData,
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
