import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

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
          <a href="#intro" className="logo">
            genius.
          </a>
        </div>

        <div className="right">
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 6205123312</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>vatsalarya1.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
