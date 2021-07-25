import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import GetAppIcon from '@material-ui/icons/GetApp';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar neu " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          <a href="assets/Resume.pdf" download className="logo neu2">
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
