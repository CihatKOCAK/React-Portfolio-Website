import { useState } from "react";

export default function PortfolioItem({ d, index, activited, setActivited }) {

    
    return (
     
            <div key={d.title + index} className={"item "+(activited && "active")}  onClick={() =>activited ? setActivited(false) : setActivited(true)}>
                <img src={d.img} alt=""/>
                <h3>{d.title}</h3>
            </div> 
    )
}
