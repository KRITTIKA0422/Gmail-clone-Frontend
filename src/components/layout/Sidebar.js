import React from "react";
import Button from '@mui/material/Button';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import InboxIcon from '@mui/icons-material/Inbox';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PhoneIcon from '@mui/icons-material/Phone';
import Sidebaroptions from "./Sidebaroptions";
import SentMail from "./SentMail";
import {useState} from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";


export default function Sidebar(){
    const [show,setShow]= useState(true);
    return(
        <div className="sidebarwrapper">
            <Button startIcon={<CreateOutlinedIcon/>} className="sidebar_compose" onClick={()=>setShow(!show)}>Compose</Button>
            {show?<SentMail/>:""} 
            <Link to="/main"><Sidebaroptions Icon ={InboxIcon} title="Inbox"  selected={true} number=""/></Link>
            <Sidebaroptions Icon ={StarOutlineIcon} title="Starred" number=""  />
            <Sidebaroptions Icon ={WatchLaterOutlinedIcon} title="Snoozed" number="" />
            <Link to="sentlist"><Sidebaroptions Icon ={SendOutlinedIcon} title="Sent" number="" /></Link>
            <Sidebaroptions Icon ={InsertDriveFileOutlinedIcon} title="Drafts" number=""/>
            <Sidebaroptions Icon ={LabelOutlinedIcon} title="Notes" number=""/>
            <Sidebaroptions Icon ={ExpandMoreIcon} title="More" number="" />
            <div className="sidebar_footer">
                <div className="sidebar_footericons">
                <IconButton>
                <PersonIcon/>
                </IconButton>
                <IconButton>
                <FormatQuoteIcon/>
                </IconButton>
                <IconButton>
                <PhoneIcon/>
                </IconButton>
                </div>
            </div>
           </div>
    )
}