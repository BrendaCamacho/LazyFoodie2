import React from "react";
import logo from "../..//img//lazyfoodie.png"
// import { Link } from "react-router-dom";
require("../..//App.css")

function Logo() {
    return (
        <img src={logo}
        id="logo"
        alt="Lazy foodie logo"></img>

    )
}
export default Logo;