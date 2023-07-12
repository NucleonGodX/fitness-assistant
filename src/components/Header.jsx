import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
    return(        <div className='topnav'>
    <NavLink to='/'>FitACAD</NavLink>
    <NavLink to="/Exercises" className={({isActive})=>isActive?"after-click": "before"}>Exercises</NavLink>
    <div className="topnav-right">
    <NavLink to= "/about-us" className={({isActive})=>isActive?"after-click": "before"}>About Us</NavLink>
    <NavLink to="/sign-up" className={({isActive})=>isActive?"after-click": "before"}>Sign Up</NavLink>
    </div>
    </div>)
}