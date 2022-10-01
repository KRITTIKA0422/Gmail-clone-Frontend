import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import Sidebar from "./Sidebar";
import Readmails from "./Readmails";
import Emailsviewer from "./Emailsviewer";
import Sentmailviewer from "./Sentmailviewer";
import Readsentmails from "./Readsentmails";
import {useState} from "react";
import { useEffect } from "react";
import { API } from "./Global";
import "./Main.css";

export default function Main(){
    const[mailsin,setMailsin]=useState([]);
    const[mailsout,setMailsout]=useState([]);
   useEffect(()=>{
     fetch(`${API}/mailsin`)
     .then((data)=>data.json())
     .then((m)=>setMailsin (m));
   },[]);
   useEffect(()=>{
    fetch(`${API}/mailsout`)
    .then((sentdata)=>sentdata.json())
    .then((n)=>setMailsout (n));
  },[]);
    return(
        <div className="main">
            <Header />
            <div className="bodywrapper">
           <Sidebar />
           <Routes> <Route path="/" element={<Emailsviewer/>} />
           </Routes>
           <Routes> 
            <Route path="sentlist/*" element={<Sentmailviewer/>} />
           </Routes>
           <Routes>
           <Route path="mail" element={mailsin.map((m)=>(<Readmails readdetails={m}/>))}/>
           </Routes>
           <Routes>
           <Route path="sentlist/sent" element={mailsout.map((n)=>(<Readsentmails sentdetails={n}/>))}/>
           </Routes>
         
            </div>
           </div>
    );
}