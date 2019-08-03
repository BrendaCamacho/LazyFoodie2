import React from "react";
import { Link } from "react-router-dom";


function Nav() {
    return (
        


    <nav>

            <ul id="nav-mobile" className="right">
                <li>
                    <Link to="/" >
                        Search
                    </Link>
                </li>
                <li>
                    <Link to="/saved">
                        Saved
                    </Link>
                </li>
                <li>
                    <Link to="/LogIn">
                        Log In
                    </Link>
                </li>
             </ul>
    </nav>

    


    );
}
export default Nav;