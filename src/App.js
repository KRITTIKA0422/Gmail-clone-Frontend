import "./App.css";



// App - component
export default function App() {
  return (
    <div className="App">
   
  <div className="container">
            <h5 className="card-title">Free</h5>
            <h6 className="card-price">$0<span className="period">/month</span></h6>
            <ul className="fa-ul" type="none">
              <li><strong>&#x2714; </strong>Single User</li>
              <li><strong>&#x2714; </strong>5GB Storage</li>
              <li><strong>&#x2714; </strong>Unlimited Public Projects</li>
              <li><strong>&#x2714; </strong>Community Access</li>
              <li className="text-muted"><strong>&#10006; </strong>Unlimited
                Private Projects</li>
              <li className="text-muted"><strong>&#10006; </strong>Dedicated
                Phone Support</li>
              <li className="text-muted"><strong>&#10006; </strong>Free Subdomain
              </li>
              <li className="text-muted"><strong>&#10006; </strong>Monthly Status
                Reports</li>
            </ul>
            <div><button className="btn1">Button</button></div>
            </div>
       
            <div className="container">
            <h5 className="card-title">Plus</h5>
            <h6 className="card-price">$9<span class="period">/month</span></h6>
            <ul className="fa-ul" type="none">
              <li><strong>&#x2714; </strong><strong>5 Users</strong></li>
              <li><strong>&#x2714; </strong>50GB Storage</li>
              <li><strong>&#x2714; </strong>Unlimited Public Projects</li>
              <li><strong>&#x2714; </strong>Community Access</li>
              <li><strong>&#x2714; </strong>Unlimited Private Projects</li>
              <li><strong>&#x2714; </strong>Dedicated Phone Support</li>
              <li><strong>&#x2714; </strong>Free Subdomain</li>
              <li className="text-muted"><strong>&#10006; </strong>Monthly Status
                Reports</li>
                </ul>

              <div><button className="btn1">Button</button></div>
            </div>
        
            <div className="container">
            <h5 className="card-title">Pro</h5>
            <h6 className="card-price">$49<span class="period">/month</span></h6>
            <ul className="fa-ul" type="none">
              <li><strong>&#x2714; </strong><strong>Unlimited Users</strong>
              </li>
              <li><strong>&#x2714; </strong>150GB Storage</li>
              <li><strong>&#x2714; </strong>Unlimited Public Projects</li>
              <li><strong>&#x2714; </strong>Community Access</li>
              <li><strong>&#x2714; </strong>Unlimited Private Projects</li>
              <li><strong>&#x2714; </strong>Dedicated Phone Support</li>
              <li><strong>&#x2714; </strong><strong>Unlimited</strong> Free
                Subdomains</li>
              <li><strong>&#x2714; </strong>Monthly Status Reports</li>
            </ul>
              <div><button className="btn1">Button</button></div>
            </div>
            </div>
);
}
