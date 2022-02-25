import React, { useState } from "react";

const AuthContext = React.createContext()

export const AuthContextProvider = (props)=> {



    const [credentials,setCredentials] =useState({

        firstName:'',
        lastName:'',
        email:'',
        password:''
    })
    
    const handleCredentials = {firstName,lastName,email,password} =>{
        setCredentials({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password,password
        })
    }




    return (
        <AuthContext.Provider value={{}}>
        {props.children}
        </AuthContext.Provider>
    )


}
export default AuthContext;
