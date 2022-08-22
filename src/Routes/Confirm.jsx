import React from "react";
import Nav from "../components/Nav"
import { useNavigate } from "react-router-dom"
import "../Styles/confirm.scss"

const Confirm=()=>{
  
    let Navigate = useNavigate()
    const handleSubmit=()=>{
        Navigate('/Pcomplete')
    }
    return (

        <main className="confirm card">
            <Nav focus="CP"/>
            <div className="price-card">
                <table>
                    <thead>
                        <tr>
                            <td>Item Name</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Data science and usability</td>
                            <td> 50,000.00</td>

                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>0.00</td>
                        </tr>
                        <hr/>
                        <tr className="Total">
                            <td>Total</td>
                            <td>50,000.00</td>
                        </tr>
                    </tbody>
                </table>
                     <div className="navigate">          
                        <button className="btn"
                        onClick={handleSubmit}>Pay</button>
                        <p className="cancel"
                        onClick={()=> Navigate("/")}
                        >Cancel</p>
                    </div>
            </div>
        </main>
    )
}

export default Confirm;