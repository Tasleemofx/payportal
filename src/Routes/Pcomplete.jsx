import React from "react";
import { TiTick } from "react-icons/ti";
import {Link} from "react-router-dom";
import "../Styles/complete.scss"

const Pcomplete=()=>{
    return <div className="complete card">
    <TiTick className="tick"/>
    <p>Please check your email for details concerning this transaction</p>

    <Link to="/">
        Return home
    </Link>
    </div>;
}

export default Pcomplete