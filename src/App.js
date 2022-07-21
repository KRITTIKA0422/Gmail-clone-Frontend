
import "./App.css";
import {useState} from "react";
import { useEffect } from 'react';


// App - component
function App() {
  const[mobiles,setMobiles]=useState({});
  useEffect(()=>
    fetch(`hhttp://localhost:4000/mobiles`,{
      method:"GET",
    })
    .then((data)=>data.json())
    .then((m)=>setMobiles (m));
  },[]);
  
  return (
    <div className="App">
   <div className="phones-container">{mobiles.map((m)=>(<Phone mobile ={m}/>))}</div>
   <Phone/>
    </div>
);
}
function Phone({mobile}){
  
  return(
    <div className="phone-container">
      <img className="phone-picture" src={mobile.img} alt={mobile.model}/>
      <h2 className ="phone-name">{mobile.model}</h2>
      <p className="phone-company">{mobile.company}</p>
      </div>
  );
}
export default App;
     