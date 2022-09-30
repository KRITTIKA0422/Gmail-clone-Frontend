import React from "react";
import Login from "./components/layout/Login"; 
import Main from "./components/layout/Main";
import { Routes, Route, Link } from "react-router-dom";
//import { Counter } from "./features/counter/Counter";
//import SentMail from "./components/layout/SentMail";
import "./App.css";

function App() {

  return (
    <div className="App">
      <nav className="routing">
            <ul className="route-list">
            <li><Link to="/">LOGIN</Link></li>
            <li><Link to="/main">EMAIL</Link></li>
            </ul>
            </nav> 

        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main/*" element={<Main />}/>
      </Routes>               
    </div>
     
  );
}
export default App;