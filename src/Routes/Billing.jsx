import React from "react";
import Nav from "../components/Nav";
import {Link} from "react-router-dom"

const Billing=()=>{
    return (
      <main className="billing card">
        <Nav />
        <form>
          <label>Name on Card</label>
          <input type="text" placeholder="Opara Linus Ahmed" />
          <label>Card type</label>
          <select name="cardtype">
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Verve">Verve</option>
          </select>
          <label>Card details <span>*</span></label>
          <input type="text" maxlength="16" placeholder="4490-7821-9087-1238"/>
          <label>Expiry Date</label>
          <input type="date" placeholder="04 / 23 " />
          <label>CVV <span>*</span></label>
          <input type="text" placeholder="923"/>
          <Link to="/Confirm">
            <button>Next</button>
          </Link>
          <p>Cancel Payment</p>
        </form>
      </main>
    );
}

export default Billing;