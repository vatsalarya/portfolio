import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact"
import SmallMenu from "./components/smallMenu/SmallMenu";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [theme,setTheme] = useState(false);
  return (
    <div className="app" style={{backgroundColor: theme===true ? "#ebecf0" : "#131419"}}>
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} setTheme={setTheme}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} setTheme={setTheme}/>
     <SmallMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} setTheme={setTheme}/>
     <div className="sections">
       <Intro theme={theme} setTheme={setTheme}/>
       <Portfolio theme={theme} setTheme={setTheme}/>
       <Skills theme={theme} setTheme={setTheme}/>
       <Contact theme={theme} setTheme={setTheme}/>
     </div>
    </div>
  );
}

export default App;
