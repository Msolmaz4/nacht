import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router";

const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const [sache, setSache] = useState([]);
  const navi = useNavigate();
  const [loginError, setLoginError] = useState(false);
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleCredentials = (firstName, lastName, email, password) => {
    setCredentials({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
  };

  const handleLogin = (email, password) => {
    if (credentials.email === email && credentials.password === password) {
      setLoginError(false);
      navi("/");
    } else {
      setLoginError(true);
    }
  };

  const FetchCard = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    console.log(res.data);
    setSache(res.data);
  };

  useEffect(() => {
    FetchCard();
  }, []);

  const ara = () => {
    setSearch();
    console.log(search);
  };

  return (
    <AuthContext.Provider
      value={{
        credentials: credentials,
        handleCredentials: handleCredentials,
        handleLogin: handleLogin,
        loginError: loginError,
        search: search,
        setSearch: setSearch,
        ara: ara,
        sache: sache,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
