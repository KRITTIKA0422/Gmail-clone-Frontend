import React from "react";
import { useForm } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
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
<form onSubmit={handleSubmit(formData => console.log(formData))}>
    <input name='to' placeholder='To' type="text" {...register('to', { required: true })}/>
    {errors.to && <p className="sentMail_error">Mail Id of receiver is required!</p>}
    <input name='subject' placeholder='Subject' type="text" {...register('subject', { required: true })}/>
    {errors.subject && <p className="sentMail_error">Subject is required!</p>}
    <textarea name='message' placeholder='Message...' type="text" className="sendMail_message" {...register('message', { required: true })}/>
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