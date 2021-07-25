import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["A Web Developer", " An IOS App developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Vatsal Arya</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <p>Welcome to my personal website!
            <br/> I make responsive websites using MERN stack.
            <br/>I am also proficient in other languages like Python, C++, Dev Ops(jenkins)<br/> NodeJS, Jquery, EJS, mongoDB, SQL,<br/>Swift(IOS app development at Beginner level), SwiftUI
          </p>
          <div className="buttons">
            <a href="#contact">            
              <button type="submit" className="neu">Contact Me</button>
            </a>
            <a href="#portfolio">
              <button type="submit" className="neu">More</button>
            </a>
          </div>
        </div>

      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/mying.png" alt="" />
        </div>
        <div className="mob_but">
          <a href="#contact">            
            <button type="submit" className="neu">Contact Me</button>
          </a>
        </div>
        <a className="arrow_bottom" href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>

    </div>
  );
}
