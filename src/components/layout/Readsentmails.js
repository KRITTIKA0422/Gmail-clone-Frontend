import React from "react";
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import "./Readsentmails.css";

export default function Readsentmails({sentdetails}){
    const navigate = useNavigate();
    return( 
        <div className="smail">
            <div className="smail_tools">
                <div className="smail_toolsleft">
                <IconButton onClick={()=>navigate("sent/sentlist")}>
                    <ArrowBackIcon/>
                    </IconButton>
                    <IconButton>
                    <MoveToInboxIcon/>
                    </IconButton>
                    <IconButton>
                    <ErrorIcon/>
                    </IconButton>
                    <IconButton>
                    <DeleteIcon/>
                    </IconButton>
                    <IconButton>
                    <EmailIcon/>
                    </IconButton>
                    <IconButton>
                    <WatchLaterIcon/>
                    </IconButton> 
                    <IconButton>
                    <CheckCircleIcon/>
                    </IconButton>  
                    <IconButton>
                    <LabelImportantIcon/>
                    </IconButton>  
                    <IconButton>
                    <MoreVertIcon/>
                    </IconButton> 
                </div>
                <div className="smail_toolsRight">
                <IconButton>
                    <UnfoldMoreIcon/>
                    </IconButton>  
                    <IconButton>
                    <PrintIcon/>
                    </IconButton>  
                    <IconButton>
                    <ExitToAppIcon/>
                    </IconButton> 
                </div>
            </div>
          <div className="smail_body">
            <div className="smail_bodyHeader">
              <h2>{sentdetails.subject}</h2>
              <LabelImportantIcon className="smail_important"/>
              <p>{sentdetails.to}</p>
            </div>
            <div className="smail_message">
                <p>{sentdetails.message}</p>
            </div>
          </div>
           </div>
    );
}