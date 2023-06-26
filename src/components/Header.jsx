import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
    return(        <div className='topnav'>
    <NavLink to='/'>FitCAD</NavLink>
    <NavLink to="/exercises" className={({isActive})=>isActive?null: null}>Exercises</NavLink>
    <div className="topnav-right">
    <NavLink to= "/about-us" className={({isActive})=>isActive?null: null}>About Us</NavLink>
    <NavLink to="/sign-in" className={({isActive})=>isActive?null: null}>Sign In</NavLink>
    </div>
    </div>)
}