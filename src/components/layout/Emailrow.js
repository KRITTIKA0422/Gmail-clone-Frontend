import React from "react";
import { Checkbox } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import IconButton from '@mui/material/IconButton';
import "./Emailrow.css";
import { useNavigate } from 'react-router-dom';


export default function Emailrow({incomemails}){
    const navigate = useNavigate();
    return(
        <div onClick={()=>navigate("mail")} className="emailRow">
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
            {incomemails.title}
         </h3>
         <div className="emailRow_message">
            <h4>{incomemails.subject}{" "}
            <span className="emailRow_description">-
            {incomemails.description}</span></h4>
         </div>
         <p className="emailRow_time">
          {incomemails.time}  
         </p>
           </div>
    );
}