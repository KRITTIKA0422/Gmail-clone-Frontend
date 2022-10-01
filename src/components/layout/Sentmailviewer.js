import React from "react";
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Section from './Section';
import Sentmailrow from "./Sentmailrow";
import {useState} from "react";
import { useEffect } from "react";
import { API } from "./Global";
import "./Sentmailviewer.css";


export default function Sentmailviewer(){
   const[mailsout,setMailsout]=useState([]);
   useEffect(()=>{
     fetch(`${API}/mailsout`)
     .then((data)=>data.json())
     .then((m)=>setMailsout (m));
   },[]);
   console.log (mailsout);
    return(
        <div className="emailList">
            <div className="emailList_settings">
                <div className="emailList_settingsLeft">
                <Checkbox/>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RedoIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
                </div>
                <div className="emailList_settingsRight">
                <IconButton>
                    <ChevronLeftIcon/>
                </IconButton>
                <IconButton>
                    <ChevronRightIcon/>
                </IconButton>
                </div>
            </div> 
            <div className="emailList_sections">
                <Section Icon={InboxIcon} title='Primary'color='red' selected/>
                <Section Icon={PeopleIcon} title='Social'color='#1A73E8'/>
                <Section Icon={LocalOfferIcon} title='Promotions'color='green'/>
                </div>   
                <div className="emailList_list">{mailsout.map((m)=>(<Sentmailrow outermails={m}/>))}
                    </div>   
           </div>
    );
}