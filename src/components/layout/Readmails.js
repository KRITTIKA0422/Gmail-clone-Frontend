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
import "./Readmails.css";

export default function Readmails(){
    const navigate = useNavigate();
    return( 
        <div className="mail">
            <div className="mail_tools">
                <div className="mail_toolsleft">
                <IconButton onClick={()=>navigate("/main")}>
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
                <div className="mail_toolsRight">
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
          <div className="mail_body">
            <div className="mail_bodyHeader">
              <h2>Subject</h2>
              <LabelImportantIcon className="mail_important"/>
              <p>Title</p>
              <p className="mail_time">09.25</p>
            </div>
            <div className="mail_message">
                <p>This is a message</p>
            </div>
          </div>
           </div>
    );
}