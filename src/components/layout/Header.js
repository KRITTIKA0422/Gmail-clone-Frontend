import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Header.css";

export default function Header(){
    return(
        <div className="wrapper">
            <div className="logowrapper">
           <div className="menuicon">
<MenuIcon />
           </div>
           <div className="logo"> 
            <img src='https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg' alt="gmail logo"/>
            </div>
           </div>
           <div className="searchwrapper">
            <div className="searchbarwrapper">
                <div className="searchiconwrapper">
                <SearchIcon/>
                </div>
                <input type='text' placeholder="Search mail"/>
                <ExpandMoreIcon />
            </div>
           </div>
           <div className="iconswrapper">
             <HelpOutlineIcon/>
             <SettingsIcon/>
             <AppsIcon/>
             <AccountCircleIcon/>
           </div>
           </div>
    )
}