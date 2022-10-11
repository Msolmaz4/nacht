import "./register.css";

import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContex";
import { useEffect } from "react";

export default function Register() {
  const { handleCredentials, credentials,setFirstName } = useContext(AuthContext);


  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('refggg',email,password)
    handleCredentials(email, password);
    //setFirstName("");
    //setLastName("");
    setEmail("");
    setPassword("");
  };

useEffect(()=>{
  
},[email])
 
  return (
    <div className="login">
      <div className="bild">
        <img src="https://picsum.photos/800/800" alt="resim" />
      </div>
      <div>
        <h2 className="gehen"> REGISTER</h2>
        <form className="loginform"onSubmit={(e) => handleSubmit(e)} >
          <div>
            <label for="first-name" className="form-label display-2">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="first"
              placeholder="enter your Name"
              onClick={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label for="last-name" className="form-label display-2">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="last"
              placeholder="enter Last Name"
              onClick={(e) => setLastName(e.target.value)}
            />
          </div>
          <label for="email" className="form-label display-2">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="enter Email"
            onClick={(e) => setEmail(e.target.value)}
          />
          <label for="password" className="form-label display-2">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
            onClick={(e) => setPassword(e.target.value)}
          />

          <div className="btnl">
            <input
              type="submit"
              value="register"
              className="btn btn-primary form-control"
              
            />
          </div>
        </form>
      </div>
    </div>
  );
}
