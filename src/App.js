import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Login from "./components/layout/Login"; 
import Main from "./components/layout/Main";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <nav>
       <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>navigate("/")}>Login</Button>
          <Button color="inherit" onClick={()=>navigate("/")}>Logout</Button>
        </Toolbar>
      </AppBar>
      </nav>

        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main/*" element={
        <ProtectedRoute>
          <Main />
        </ProtectedRoute>}/>
      </Routes>               
    </div>
     
  );
}

function ProtectedRoute({children}){
const isAuth= localStorage.getItem("token")
return isAuth ? children:<Login/>
}

export default App;