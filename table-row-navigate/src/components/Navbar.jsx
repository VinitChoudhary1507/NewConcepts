import { Link } from "react-router-dom";
import React from "react";

const Navbar=()=>{
return(
    <div>
        <nav>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/login"><li>login</li></Link>
        <Link to="/table"><li>Table</li></Link>
        </nav>
    </div>
)
}
export default Navbar;