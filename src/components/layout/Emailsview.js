import React from "react";
import Checkbox from '@mui/material/Checkbox';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { emailData } from "../../temp/Emaildata";
import Emailitem from "../emailitem/Emailitem";
import "./Emailsview.css";


export default function Emailsview(){
    return(
      <div className="emailwrapper">
      <div className="topemailwrapper">
        <Checkbox/>
      <IconButton>
        <RefreshIcon/>
      </IconButton>
      <IconButton>
        <MoreVertIcon/>
      </IconButton>
      </div>
      <div className="emailscontainer">
        {
            emailData.map(({starred,from,subject,message, received,read})=>(
            <Emailitem
             starred={starred}
             from={from}
             subject={subject}
             message={message}
             received={received}
             read={read}
            />
            ))
        }
        </div>
      </div>   
          
    )
}