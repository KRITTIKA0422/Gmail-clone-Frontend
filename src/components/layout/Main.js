import React from "react";
import Sidebar from "./Sidebar";
import Emailsview from "./Emailsview";
import Sideicons from "./Sideicons";
import "./Main.css";

export default function Main(){
    return(
        <div className="wrapper">
            <Sidebar />
            <Emailsview />
            <Sideicons />
           </div>
    )
}