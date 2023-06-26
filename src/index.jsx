import React from "react";
import  ReactDOM  from "react-dom/client";
import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App()
{
    return(
    <BrowserRouter>
    <Routes>
    <Route element={<Layout/>}>
    <Route index element={<Home/>}/>
    </Route>
    </Routes>
    </BrowserRouter>)
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App/>
    )