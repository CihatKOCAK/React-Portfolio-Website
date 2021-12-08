import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen, setSelectedLang, selectedLang}) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=> setMenuOpen(false)}><a href="#intro">Home</a></li>
                <li onClick={()=> setMenuOpen(false)}><a href="#portfolio">Portfolio</a></li>
                <li onClick={()=> setMenuOpen(false)}><a href="#works">Works</a></li>
                <li onClick={()=> setMenuOpen(false)}><a href="#testimonials">Testimonials</a></li>
                <li onClick={()=> setMenuOpen(false)}><a href="#contact">Contact</a></li>
            </ul>
            <ul className= {"lang " + selectedLang}>

                <li  onClick={()=> setSelectedLang("en") } className="lang-en">EN</li>
                <li onClick={()=> setSelectedLang("tr") } className="lang-tr">TR</li>
            </ul>
        </div>
    )
}
