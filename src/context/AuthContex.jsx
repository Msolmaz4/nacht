import React, { useState, useEffect } from "react";
import axios from "axios";
import {auth} from '../auth/fire-base'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut   } from "firebase/auth";

import { useNavigate } from "react-router";

const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {

  const [firstName, setFirstName] = useState("");
  const [search,setSearch] = useState("");
  const [sache,setSache] = useState([]);
  const navi = useNavigate();
  const [log,setLog] =useState(false)
  const [loginError, setLoginError] = useState(false);
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleCredentials = (email, password) => {
    console.log('aaaaaaaaa')
   /**setCredentials({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    *  */ 
    createUserWithEmailAndPassword (auth, email, password)
    navi('/login')

    

  };

  const handleLogin = (email, password) => {
    console.log('loginde',email,password)
    /**
     * if (credentials.email === email && credentials.password === password) {
      setLoginError(false);
      navi("/");
    } else {
      setLoginError(true);
    }
     */
    
    signInWithEmailAndPassword(auth, email, password)

  navi('/')
  setLog(true)

  };

   const logout =()=>{
    signOut(auth)
    navi('/')
   }

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
        log:log,
        setFirstName,
        logout

       
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
