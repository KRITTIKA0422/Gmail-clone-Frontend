import React from "react";
import Compose from "../buttons/Compose";
import { sidebarbuttonitems } from "../data/Sidebarbuttonitems";
import "./Sidebar.css";

export default function Sidebar(){
    return(
        <div className="sidebarwrapper">
            <div className="composewrapper">
                <Compose />
            </div>
             <div className="sidebuttonswrapper">
                {
                    sidebarbuttonitems.map(item=>
                    (
                        <div className="sidebarbuttons">{item.icon} {item.text}</div>
                    ))
                }
                </div> 
                <div className="meetwrapper">
                    </div>
                    <div className="hangoutwrapper">
                        </div>
                        <div className="bottomiconswrapper">
                            </div>               
           </div>
    )
}