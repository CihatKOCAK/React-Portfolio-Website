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


  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 0);
  }, []);

  const [timedPopup, setTimedPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h3>My popup</h3>
        <p>This is my button triggered popup</p>
        <p>This is my button triggered popup</p>
        <p>This is my button triggered popup</p>
        <p>This is my button triggered popup</p>
        <p>This is my button triggered popup</p>
        <p>This is my button triggered popup</p>
        <p>This is my button triggered popup</p>
      </Popup>
      <div className="sections">
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
