import "./menu.scss";
import HomeIcon from '@material-ui/icons/Home';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu neu "+(menuOpen && "active neu")}>
      <ul>
        <li className="top" onClick={()=>setMenuOpen(false)}>
          <HomeIcon className="icon" />
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <HomeIcon className="icon" />
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <HomeIcon className="icon" />
          <a href="#works">Works</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <HomeIcon className="icon" />
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <HomeIcon className="icon" />
          <a href="#contact">Contact</a>
        </li>
        <li className="bottom" onClick={()=>setMenuOpen(false)}>
          <HomeIcon className="icon" />
          <a href="#contact">LinkedIn</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <HomeIcon className="icon" />
          <a href="#contact">Twitter</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <HomeIcon className="icon" />
          <a href="#contact">GitHub</a>
        </li>
       
        
      </ul>
    </div>
  );
}
