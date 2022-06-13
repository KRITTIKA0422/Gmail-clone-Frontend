import {useState} from "react";
import "./App.css";



// App - component
export default function App() {
  return (
    <div className="App">
   <TopLayout/>
            </div>
);
}
function TopLayout(){
  const [count,setCount]=useState(0);
  return(
    <div>
      <nav>
        <h2 className="heading">Start Bootstrap</h2>
        <ul className="topBar" type="none">
          <li>Home</li>
          <li>About</li>
          <li><select name="Shop" id="shop_tab"><option id="allProducts" value="#">All Products</option>
          <option value="#">Popular Items</option>
          <option value="#">New Arrivals</option></select></li>
        </ul>
        <button className="btn1">Cart {count}</button>
      </nav>
    </div>
  );
}
