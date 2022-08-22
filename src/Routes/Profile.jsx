import React, {useState} from "react";
import { useNavigate } from "react-router-dom"
import Nav from "../components/Nav";
import "../Styles/profile.scss";

const Profile=()=>{
  let navigate= useNavigate()
  
  const [formstate, setFormstate]= useState(
    {
      name: "",
      email:"",
      address1:"",
      address2:'',
      lg:"",
      state:""
    }
  )
  const handleValidate =()=>{
    let check;
   if(Object.values(formstate).find((i)=> i === '')){
    check = false
    console.log("Please insert all values")
   }else{
    check = true
   }
   return check;
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(handleValidate()){
    navigate("/Billing")
    }
  }
  const handleCancel=()=>{
    navigate('/')
  }
    return (
      <main className="profile-page card">
        <Nav focus="PI" />
        <form>
          <div className="input-div">
            <label>Name</label>
            <input
              type="text"
              id="name"
              placeholder="Opara Linus Ahmed"
              className="input"
              onChange={(e) =>
                setFormstate({ ...formstate, name: e.target.value })
              }
              value={formstate.name}
            />
          </div>
          <div className="input-div">
            <label>
              Email Address <span className="star">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="OparalinusAhmed@devmail.com"
              className="input"
              onChange={(e) =>
                setFormstate({ ...formstate, email: e.target.value })
              }
              value={formstate.email}
            />
          </div>
          <div className="input-div">
            <label>Address 1</label>
            <input
              type="text"
              id="Address1"
              placeholder="The address of the user goes here"
              className="input"
              onChange={(e) =>
                setFormstate({ ...formstate, address1: e.target.value })
              }
              value={formstate.address1}
            />
          </div>
          <div className="input-div">
            <label>Address 2</label>
            <input
              type="text"
              id="Address2"
              placeholder="and here"
              className="input"
              onChange={(e) =>
                setFormstate({ ...formstate, address2: e.target.value })
              }
              value={formstate.address2}
            />
          </div>
          <div className="flex-div">
            <div className="input-div ls">
              <label>Local Government</label>
              <input
                type="text"
                placeholder="Surulere"
                value={formstate.lg}
                onChange={(e) =>
                  setFormstate({ ...formstate, lg: e.target.value })
                }
              />
            </div>
            <div className="input-div ls">
              <label>State</label>
              <input
                type="text"
                placeholder="Lagos"
                value={formstate.state}
                onChange={(e) =>
                  setFormstate({ ...formstate, state: e.target.value })
                }
              />
            </div>
          </div>
          <div className="navigate">
            {/* {validate? */}
            <button className="btn" onClick={handleSubmit}>
              Next
            </button>:
            {/* <button disabled>next</button> */}
            {/* } */}

            <p className="cancel" onClick={handleCancel}>Cancel payment</p>
          </div>
        </form>
      </main>
    );
}

export default Profile;