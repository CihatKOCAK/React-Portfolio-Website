import { useState, useRef } from "react";
import { OuterClick } from "react-outer-click";

export default function PortfolioItem({ d, index }) {
    const [activited, setActivited] = useState(false);
    
    return (

        <OuterClick
        as={"div"}
        onOuterClick={(e) => {
          e.preventDefault();
          setActivited(false);
        }}
        key={d.title + index}
        className={"item " + (activited && "active")}
        onClick={() => (activited ? setActivited(false) : setActivited(true))}
      >
        <img src={d.img} alt="" />
        <h3>{d.title}</h3>
      </OuterClick>
    )
}
