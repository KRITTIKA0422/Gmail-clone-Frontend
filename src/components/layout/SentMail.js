import React from "react";
import { useForm } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
import { API } from './Global';
import "./SentMail.css";
import { Button } from "@mui/material";



export default function SentMail(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    return(
        <div className="sendMail">
            <div className="sendMail_header">
              <h3>New Message</h3>
              <CloseIcon className="sendMail_close"/>
            </div>
<form onSubmit={handleSubmit((formData) =>{
    console.log(formData);
return fetch(`${API}/mailsout`, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
        'Content-Type': 'application/json'
    },
})
.then(res => res.json())
.then(data => console.log(data)); 
})}>

    <input  id='to' name='to' placeholder='To' type="text" {...register('to', { required: true })}/>
    {errors.to && <p className="sentMail_error">Mail Id of receiver is required!</p>}
    <input  id='subject' name='subject' placeholder='Subject' type="text" {...register('subject', { required: true })}/>
    {errors.subject && <p className="sentMail_error">Subject is required!</p>}
    <textarea id='message' name='message' placeholder='Message...' type="text" className="sendMail_message" {...register('message', { required: true })}/>
    {errors.message && <p className="sentMail_error">Message is required!</p>}
    <div className="sendMail_options">
        <Button className="sendMail_send"
        variant="contained"
        color="primary"
        type="submit"
        >
            Send</Button>
    </div>
</form>
        </div>
    );
}