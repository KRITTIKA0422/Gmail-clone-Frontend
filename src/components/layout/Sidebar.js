import React from "react";
import Compose from "../buttons/Compose";
import { sidebarbuttonitems } from "../data/Sidebarbuttonitems";
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { sidebottomicons } from "../data/Bottomiconsdata";
import "./Sidebar.css";

export default function Sidebar(){
    return(
        <div className="sidebarwrapper">
             <div className="topsectionwrapper">
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
                </div>
                <div className="bottomswrapper">
                <div className="sidesectionwrapper">
                    <h4>Meet</h4>
                    <p><VideocamOutlinedIcon/>New Meeting</p>
                    <p><KeyboardOutlinedIcon/>Join Meeting</p>
                    </div>
                    <div className="sidesectionwrapper">
                    <h4>Hangouts</h4>
                    <p><AccountCircleIcon/>Krittika Podder</p>
                    </div>
                        <div className="bottomiconswrapper">
                            {
                                sidebottomicons.map(bottomitem=>(
                                    <>
                                    {bottomitem}
                                    </>
                                    ))
                            }
                            </div>  
                            </div>             
           </div>
    )
}