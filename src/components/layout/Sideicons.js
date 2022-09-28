import React from "react";
import "./Sideicons.css";
import AddIcon from '@mui/icons-material/Add';

export default function Sideicons(){
    return(
        <div className="sideiconwrappercolumn">
            <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png" />
            <img src="https://www.androidpolice.com/wp-content/uploads/2018/03/nexus2cee_new-tasks-icon.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png" />
           <hr/>
           <AddIcon/>
           </div>
    )
}