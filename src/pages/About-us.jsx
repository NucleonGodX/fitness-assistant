import React from "react";
import Data from "../about-data"
import { Link } from "react-router-dom";
export default function About(){
    const [data, setData]=React.useState(Data)
    const dataItem=data.map((info)=> 
    
    <Link to={`/about-us/${info.title}`} className="about-cards hover:w-96 shadow-2xl hover:bg-violet-400	hover:font-bold		 	" ><div >
        <img src={info.image} className="hover:w-96"/>
        <h1 className="info-title hover:text-pink-700	">{info.title}</h1>
        <h2 className="info-info text-slate-950		">{info.info}</h2>
        </div></Link>)
    return(<>
        <h1 className="about-heading">MORE PERKS FOR YOUR ASSISTANCE</h1>
        <group>
        {dataItem}
        </group>
        </>
        )
}