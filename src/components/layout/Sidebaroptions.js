import React from "react";

import "./Sidebaroptions.css";

export default function Sidebaroptions({Icon,title, number,selected}){
    return(
        <div className={`sidebarOptions ${selected && 'sidebarOptions--active'}`}>
              <Icon/>
              <h3>{title}</h3>
              <p>{number}</p>     
           </div>
    )
}