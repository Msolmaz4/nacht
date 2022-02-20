import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Register from "./components/Register";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
