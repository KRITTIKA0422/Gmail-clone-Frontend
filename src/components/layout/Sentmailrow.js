import React from "react";
import { Checkbox } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import IconButton from '@mui/material/IconButton';
import "./Sentmailrow.css";
import { useNavigate } from 'react-router-dom';


export default function Sentmailrow({outermails}){
    const navigate = useNavigate();
    return(
        <div onClick={()=>navigate("sent")} className="emailRow">
         <div className="emailRow_options">
            <Checkbox/>
            <IconButton>
                <StarBorderOutlinedIcon/>
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon/>
            </IconButton>
         </div>
         <h3 className="emailRow_title">
            {outermails.to}
         </h3>
         <div className="emailRow_message">
            <h4>{outermails.subject}{" "}
            <span className="emailRow_description">-
            {outermails.message}</span></h4>
         </div>
           </div>
    );
}