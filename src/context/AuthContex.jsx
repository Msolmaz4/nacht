import React, { useState } from "react";

import { useNavigate } from "react-router";

const AuthContext = React.createContext()

export const AuthContextProvider = (props)=> {

    const navi = useNavigate()
    const [loginError,setLoginError] =useState(false)
    const [credentials,setCredentials] =useState({

        firstName:'',
        lastName:'',
        email:'',
        password:''
    })
    
    const handleCredentials =(firstName,lastName,email,password) => {
        setCredentials({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        })
    }

    const handleLogin =(email,password) => {
        if(credentials.email === email && credentials.password === password)
      {  setLoginError(false);
        navi('/');
}
     else {
        setLoginError(true)

    }
}



    return (
        <AuthContext.Provider value={{
            credentials:credentials,
            handleCredentials:handleCredentials,
            handleLogin:handleLogin,
            loginError:loginError
        }}>
        {props.children}
        </AuthContext.Provider>
    )


}
export default AuthContext;
