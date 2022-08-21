import React from "react";
import { TiTick } from "react-icons/ti";
import {Link} from "react-router-dom";

const Pcomplete=()=>{
    return <div className="Complete-card">
    <TiTick className="tick"/>
    <p>Please check your email for details concerning this transaction</p>

    <Link to="/">
        Return home
    </Link>
    </div>;
}

export default Pcomplete