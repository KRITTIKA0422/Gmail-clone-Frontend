import React from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import { Routes, Route, Link } from "react-router-dom";
//import Emailsview from "./components/layout/Emailsview";
//import Sideicons from "./components/layout/Sideicons";
import Readmails from "./components/layout/Readmails";
import Emailsviewer from "./components/layout/Emailsviewer";
import "./App.css";

function App() {

  return (
    <div className="App">
          
            <Header />
            <div className="bodywrapper">
            <Sidebar />
            <Routes> 
              <Route path="/mail" element={<Readmails/>} />
            </Routes> 
            <Routes> 
              <Route path="/" element={<Emailsviewer/>} />
            </Routes>  
            </div>     
    </div>
     
  );
}
export default App;