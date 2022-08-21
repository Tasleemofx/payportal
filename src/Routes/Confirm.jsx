import React from "react";
import Nav from "../components/Nav"
import { Link } from "react-router-dom"

const Confirm=()=>{
    return (
        <main className="confirm card">
            <Nav/>
            <div class="price card">
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
                <Link to="/Pcomplete">
                    <button>Pay</button>
                </Link>
            </div>
        </main>
    )
}

export default Confirm;