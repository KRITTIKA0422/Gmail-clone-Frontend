import React from "react";
import { useFormik } from 'formik';

import "./Login.css";

export default function Login(){
    const formik=useFormik({ 
        initialValues:{username:"",password:""},
        onSubmit:(values)=>{
            console.log("onSubmit",values);
            localStorage.setItem('token',"my_cool_token")
        },
    });
    
    return(
        <form onSubmit={formik.handleSubmit}>
        <input placeholder="username" 
        onChange={formik.handleChange}
        value={formik.values.username}
        name="username" />
        <input type="password" 
        placeholder="password" 
        onChange={formik.handleChange} 
        value={formik.values.password}
        name="password" />
        <pre>Values:{JSON.stringify(formik.values)}</pre>
        <button type="submit">Submit</button>
        </form>
    );
}