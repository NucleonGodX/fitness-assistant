import React from "react";
import Data from "../about-data"
import { Link } from "react-router-dom";
export default function About(){
    const [data, setData]=React.useState(Data)
    const dataItem=data.map((info)=> 
    
    <Link to={`/about-us/${info.title}`} className="about-cards"><div>
        <img src={info.image}/>
        <h1 className="info-title">{info.title}</h1>
        <h2 className="info-info">{info.info}</h2>
        </div></Link>)
    return(<>
        <h1 className="about-heading">MORE PERKS FOR YOUR ASSISTANCE</h1>
        <group>
        {dataItem}
        </group>
        </>
        )
}