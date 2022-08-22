import React from "react";
import "../Styles/nav.scss"
const Nav=({focus})=>{
    return (
      <nav className="navbar">
        <h2 className="Lgheading">Complete your Purchase</h2>
        <ul>
          {focus === "PI" ? 
            <li className="nav-item focus">Personal Info</li>
           : 
            <li className="nav-item ">Personal Info</li>
          }
          {focus === "BI" ? (
            <li className="nav-item focus">Billing Info</li>
          ) : (
            <li className="nav-item ">Billing Info</li>
          )}
          {focus === "CP" ? (
            <li className="nav-item focus">Confirm Payment</li>
          ) : (
            <li className="nav-item ">Confirm Payment</li>
          )}
        </ul>
      </nav>
    );
}

export default Nav;