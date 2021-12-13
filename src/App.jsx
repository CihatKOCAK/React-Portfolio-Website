import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useEffect, useState } from "react";
import Menu from "./components/menu/Menu";
import Popup from "./components/popup/Popup";


function App() {
  const [timedPopup, setTimedPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
      console.log(timedPopup)
    }, 2000);
  }, []);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
      <div className="sections">
      <Popup key={"timedPopup"} trigger={timedPopup} setTrigger={setTimedPopup}>
        <h2>Hi There!</h2>
        <h3>this is my personal portfolio</h3>
        <p>have fun getting to know me! </p>
        </Popup>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
