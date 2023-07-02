import React from "react";
import  ReactDOM  from "react-dom/client";
import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About-us";
import Exercises from "./pages/Exercises";
import SignUp from "./pages/Auth/sign-up";
import SignIn from "./pages/Auth/sign-in";
import Dashboard from "./pages/Auth/dashboard";

function App()
{
    return(
    <BrowserRouter>
    <Routes>
    <Route element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route element={<About/>} path="about-us"/>
    <Route element={<Exercises/>} path="exercises"/>
    <Route element={<SignUp/>} path="sign-up"/>
    <Route element={<SignIn/>} path="sign-in"/>
    <Route element={<Dashboard/>} path="sign-in/dashboard"/>
    </Route>
    </Routes>
    </BrowserRouter>)
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App/>
    )