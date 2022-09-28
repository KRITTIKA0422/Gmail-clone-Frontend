import React from "react";
import Sidebar from "./Sidebar";
import Sideicons from "./Sideicons";
import Emailsview from "./Emailsview";

import "./Main.css";
import Emails from "./Emails";

export default function Main(){
    return(
        <div className="mainwrapper">
            <Sidebar />
            <Emailsview/>
            <Sideicons /> 
           </div>
    )
}