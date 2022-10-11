import "./Login.css";

import { useState, useContext } from "react";
import AuthContext from "../context/AuthContex";
import { useEffect } from "react";

export default function Login() {
  const { handleLogin, loginError } = useContext(AuthContext);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  //const [pass,setPass] =useState(" d-none")

  const handleSubmit = (e) => {
    e.preventDefault();
 
      handleLogin(email, password);
      setEmail('')
      setPassword('')
 
  };
useEffect(()=>{
handleLogin()
},[password,email])
  return (
    <div className="login">
      <div className="bild">
        <img src="https://picsum.photos/800/800" alt="resim" />
      </div>
      <div>
        <div
          className={
            loginError ? "alert alert-danger " : "alert alert-danger d-none"
          }
          role="alert"
        >
          A simple secondary alert—check it out!
        </div>
        <h2 className="gehen"> Login</h2>
        <form className="loginform">
          <div className="label1">
            <label for="email" className="form-label display-2">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              
              placeholder="enter your email adress..."
              onClick={(e) => setEmail(e.target.value)}
            />
            </div>
            <div>
              <label for="password" className="form-label display2">
                Pasword
              </label>
              <input
                type="password"
                
                className="form-control"
                placeholder="enter your Password..."
                onClick={(e) => setPassword(e.target.value)}
              />
              </div>
              <div className="btnl">
                <input
                  type="submit"
                  value="LOGIN"
                  className="btn btn-primary form-control"
                  onSubmit={(e) => handleSubmit(e)}
                />
              </div>
            
          
        </form>
      </div>
    </div>
  );
}
