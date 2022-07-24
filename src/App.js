import logo from './logo.svg';
import "./App.css";
import {useState} from "react";
import { useEffect } from 'react';


// App - component
function App() {

  const[mobiles,setMobiles]=useState({});
  useEffect(()=>{
    fetch(`http://localhost:4000/mobiles`,{
      method:"GET",
    })
    .then((data)=>data.json())
    .then((m)=>setMobiles (m));
  },[]);
  
  return (
    <div className="App">
    <div className="search-container">
    <label for="search">Search for mobiles</label>
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="Enter mobile id number"
          required
        />
    </div>
    <div className="phone-list"><ul>
      <li>REALME NARZO 50A PRIME- ID- 1</li>
      <li>REDMI NOTE 11- ID- 2</li>
      <li>SAMSUNG GALAXY A03- ID- 3</li>
      <li>SAMSUNG GALAXY M33 5G- ID- 4</li>
      <li>SAMSUNG GALAXY S20 FE 5G- ID- 5</li>
      <li>ONEPLUS 8T5G- ID- 6</li>
      <li>ONEPLUS 10R 5G- ID- 7</li>
      <li>SAMSUNG GALAXY M52 5G- ID- 8</li>
      <li>MOTOROLA 63 2S- ID- 9</li>
      <li>REALME NARZO 50i- ID- 10</li></ul></div>
   <div className="phones-container">{mobiles.map((m)=>(<Phone mobile ={m}/>))}</div>
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