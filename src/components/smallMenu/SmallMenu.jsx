import "./SmallMenu.scss";
import HomeIcon from '@material-ui/icons/Home';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import WorkIcon from '@material-ui/icons/Work';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import DevicesIcon from '@material-ui/icons/Devices';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import allTheme from "../../theme"


export default function SmallMenu({ menuOpen, setMenuOpen, theme, setTheme }) {
  return (
    <div className={"menu_small "+(menuOpen && "active")} style={theme===true ? allTheme.light.neuLight : allTheme.dark.neuDark}>
      <ul>
        <li className="top" onClick={()=>setTheme(!theme)}>
          <Brightness4Icon className="icon"/>
        </li>
        <li>
          <a href="#intro">
            <HomeIcon className="icon homeicon" />
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <WorkIcon className="icon" />
          </a>
        </li>
        <li>
          <a href="#skills">  
            <DevicesIcon className="icon" />
          </a>
        </li>
        <li>
          <a href="#contact">
            <ContactPhoneIcon className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/vatsal-arya/">
            <LinkedInIcon className="icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/vatsalarya">
            <GitHubIcon className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.codechef.com/users/vatsalarya1">
            <CodeIcon className="icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}
