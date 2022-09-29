import React from "react";
import { Checkbox } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import IconButton from '@mui/material/IconButton';
import "./Emailrow.css";
import { useNavigate } from 'react-router-dom';


export default function Emailrow({title,subject,description,time}){
    const navigate = useNavigate();
    return(
        <div  className="emailRow">
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
            {title}
         </h3>
         <div className="emailRow_message">
            <h4>{subject}{" "}
            <span className="emailRow_description">-
            {description}</span></h4>
         </div>
         <p className="emailRow_time">
          {time}  
         </p>
           </div>
    );
}