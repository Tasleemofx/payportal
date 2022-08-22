import React, {useState} from "react";
import Nav from "../components/Nav";
import {useNavigate} from "react-router-dom"

const Billing=()=>{
  const [formstate, setFormstate] = useState({
    name:"",
    cardtype: "",
    carddetails:"",
    expiry:"",
    CVV:""
  })
  let navigate= useNavigate()
  const handleCancel = () => {
    navigate("/");
  };
  const handleSubmit=(e)=> {
    e.preventDefault();
    navigate("/Confirm")
  }
    return (
      <main className="billing card">
        <Nav focus="BI" />
        <form>
          <div className="input-div">
            <label>Name on Card</label>
            <input type="text" placeholder="Opara Linus Ahmed" value={formstate.name}
            onChange={(e)=>setFormstate({...formstate, name: e.target.value}) }/>
          </div>
          <div className="input-div">
            <label>Card type</label>
            <select name="cardtype" value={formstate.cardtype}
            onChange={(e)=>setFormstate({...formstate, cardtype: e.target.value})}>
              <option value="Visa">Visa</option>
              <option value="Mastercard">Mastercard</option>
              <option value="Verve">Verve</option>
            </select>
          </div>
          <div className="input-div">
            <label>
              Card details <span>*</span>
            </label>
            <input type="number" maxLength="16" placeholder="4490-7821-9087-1238"
            value={formstate.expiry} 
            onChange={(e)=> setFormstate({...formstate,expiry: e.target.value})} />
          </div>
          <div className="input-div">
            <label>Expiry Date</label>
            <input type="date" placeholder="04 / 23 " />
          </div>
          <div className="input-div">
            <label>
              CVV <span>*</span>
            </label>
            <input type="text" placeholder="923" value={formstate.CVV}
            onChange={(e)=> setFormstate({...formstate, CVV: e.target.value})}/>
          </div>
          <div className="navigate">
            
              <button className="btn"
              onClick={handleSubmit}>Next</button>
            
            <p className="cancel" onClick={handleCancel}>
              Cancel Payment
            </p>
          </div>
        </form>
      </main>
    );
}

export default Billing;