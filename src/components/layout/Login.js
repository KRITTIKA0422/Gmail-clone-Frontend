import React, { useState } from "react";
import { useFormik } from 'formik';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { API } from './Global';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

export default function Login(){
    const[status,setStatus]=useState('primary');
    const [submitbtn,setSubmitbtn]=useState("SUBMIT");
    const navigate = useNavigate();
    const formik=useFormik({ 
        initialValues:{username:"",password:""},
        onSubmit:(userDetails)=>{
            console.log("onSubmit",userDetails);
           

            fetch(`${API}/users/login`,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(userDetails),
            }).then((data)=> {
                if(data.status===401){
                    throw new Error('Invalid user');
                } else{
                    return data.json();
                }
            }).then(data=>{
                console.log(data.token);
                localStorage.setItem("token",data.token);
                navigate('/main');
            }).catch(err=>{
                console.log(err);
                setStatus('error');
                setSubmitbtn('INVALID CREDENTIALS');
            });
        },
    });
   
    return(
        <div className="form_container">
        <h2 className="loginheader">Login to your Gmail Account</h2>
        <form  className="login_form" onSubmit={formik.handleSubmit}>
        <TextField id="username" label="Username" variant="outlined"  onChange={formik.handleChange}
        value={formik.values.username}
        name="username" />
        <TextField id="password" label="Password" variant="outlined" type="password"  
        onChange={formik.handleChange} 
        value={formik.values.password}
        name="password" />
        <Button color={status} variant="contained" type="submit">{submitbtn}</Button>
        </form>
        </div>
    );
}