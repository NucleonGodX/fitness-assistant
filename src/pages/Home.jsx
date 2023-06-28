import React from "react";
import {Link } from "react-router-dom";
export default function Home(){
    return(<div className="home-major">
    <h3 className="home-text">We At FitACAD provide you with a full body interactive exercising interface, allowing you to choose body parts on a 2D model and exercise that very body part 
        <br/>We Aim at helping you achieve the body that you ever desired by training all your parts specifially 
    </h3>
    <div className="exercise-button"><Link to="sign-up" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
    <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
    <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
    <span class="relative text-white">Start Exercising</span>
    </span>
    </Link></div></div>)
}