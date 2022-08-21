import React from "react";
import { Link } from "react-router-dom"
import Nav from "../components/Nav"

const Profile=()=>{
    return (
      <main className="profile-page card">
        
        <Nav />
        <form>
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Opara Linus Ahmed" />
          <label for="email">
            Email Address <span className="star">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="OparalinusAhmed@devmail.com"
          />
          <label for="Address1name">Address 1</label>
          <input
            type="text"
            id="Address1"
            placeholder="The address of the user goes here"
          />
          <label for="Address2">Address 2</label>
          <input type="text" id="Address2" placeholder="and here" />
          <label for="lga">Local Government</label>
          <input type="text" placeholder="Surulere" />

          <label for="state">State</label>
          <input type="text" placeholder="Lagos" />
          <Link to="/Billing">
            <button>Next</button>
          </Link>

          <p className="cancel">Cancel payment</p>
        </form>
      </main>
    );
}

export default Profile;