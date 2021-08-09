import { useState } from "react";
import allTheme from "../../theme"
import "./contact.scss";


export default function Contact({theme}) {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="https://i.ibb.co/znvjzQd/unnamed.png" alt="" />
      </div>
      <div className="right" style={theme===true ? allTheme.light.neuLight : allTheme.dark.neuDark}>
        <h2>CONTACT</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <label>Email</label>
            <input type="text" placeholder="Email" />
          </div>
          <div className="inputBox">
            <label>Message</label>
            <textarea placeholder="Message"></textarea>
          </div>
          <button type="submit" style={theme===true ? allTheme.light.neuLight : allTheme.dark.neuDark}>Send</button>
          {message && <span style={theme===true ? allTheme.light.neu2Light : allTheme.dark.neu2Dark}>Thanks, I'll reply ASAP </span>}
        </form>
      </div>
    </div>
  );
}