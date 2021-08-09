import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import GetAppIcon from '@material-ui/icons/GetApp';
import allTheme from "../../theme"


export default function Topbar({ menuOpen, setMenuOpen, theme }) {
  return (
    <div className={"topbar " + (menuOpen && "active")} style={theme===true ? allTheme.light.neuLight : allTheme.dark.neuDark}>
      <div className="wrapper">
        <div className="left">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1" style={{backgroundColor: theme===false ? "#ebecf0" : "grey"}}></span>
            <span className="line2" style={{backgroundColor: theme===false ? "#ebecf0" : "grey"}}></span>
            <span className="line3" style={{backgroundColor: theme===false ? "#ebecf0" : "grey"}}></span>
          </div>
          <a href="assets/Resume.pdf" download className="logo" style={theme===true ? allTheme.light.neuLight : allTheme.dark.neuDark}>
            <GetAppIcon className="icon"/>
            <div className="resume">Resume</div>
          </a>
        </div>

        <div className="right">
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 6205123312</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>vatsalarya1@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
