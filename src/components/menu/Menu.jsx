import "./menu.scss";
import HomeIcon from '@material-ui/icons/Home';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import WorkIcon from '@material-ui/icons/Work';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PeopleIcon from '@material-ui/icons/People';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu neu "+(menuOpen && "active neu")}>
      <ul>
        <li className="top neu" onClick={()=>setMenuOpen(false)}>
          <Brightness4Icon className="icon" />
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <HomeIcon className="icon homeicon" />
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <WorkIcon className="icon" />
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <ListAltIcon className="icon" />
          <a href="#works">Works</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <PeopleIcon className="icon" />
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <ContactPhoneIcon className="icon" />
          <a href="#contact">Contact</a>
        </li>
        <li className="bottom" onClick={()=>setMenuOpen(false)}>
          <LinkedInIcon className="icon" />
          <a href="https://www.linkedin.com/in/vatsal-arya/">LinkedIn</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <GitHubIcon className="icon" />
          <a href="https://github.com/vatsalarya">GitHub</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <CodeIcon className="icon" />
          <a href="https://www.codechef.com/users/vatsalarya1">CodeChef</a>
        </li>

      </ul>
    </div>
  );
}
