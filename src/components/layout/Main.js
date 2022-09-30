import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Sidebar from "./Sidebar";
import Readmails from "./Readmails";
import Emailsviewer from "./Emailsviewer";
import "./Main.css";

export default function Main(){
    return(
        <div className="main">
            <Header />
            <div className="bodywrapper">
           <Sidebar />
           <Routes> <Route path="/" element={<Emailsviewer/>} />
           </Routes>
            <Routes>
           <Route path="mail" element={<Readmails/>} />
           </Routes>
            </div>
           </div>
    );
}