import React, {useState} from "react";
import { Checkbox } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import "./Emailitem.css";

export default function Emailitem({starred,from,subject,message, received,read}){
    const [star,setStar]=useState(starred);
  
    return(
        <div className="emailitemcontainer">
         <Checkbox/>
         <IconButton onClick={()=> star? setStar(false):setStar(true)}>
            {
                star?(
                    <StarIcon htmlColor="#f7cb69"/>
                ): (
                    <StarBorderIcon/>
                )
            }
         </IconButton>
         <p className={!read && 'unread'}>{from}</p>
         <div>
            <p className={!read && 'unread'}>{subject} - </p>
            <span className="message">{message}</span>
         </div>
         <p className={!read && 'unread'}>{received}</p>
           </div>
    )
}