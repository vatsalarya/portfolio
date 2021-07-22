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
      strings: ["Web Developer", "IOS App developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Vatsal Arya</h1>
          <h3>
            A <span ref={textRef}></span>
          </h3>
          <p>jebkwhwvef inqhqpiugfoiqgugf iugwqi ugwfogqeiwquewi ugb euigwqe ugefw oiqu goi euegofug fewugefw
          jebkwhwvef inqhqpiugfoiqgugfgefw
          jebkwhwvef inqhqpiugfoiqgugf iugwqi ugwfogqeiwquewi ugb euigwqe ugefw oiqu goi euegofug fewugefw</p>
          <div>
          <button type="submit" className="neu">Contact Me</button>
          <button type="submit" className="neu">More</button>
          </div>
        </div>

      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/mying.png" alt="" />
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>

    </div>
  );
}
