import { useState } from "react";
import theme from "../../theme"
import "./contact.scss";


export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/unnamed.png" alt="" />
      </div>
      <div className="right" style={theme.light.neuLight}>
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
          <button type="submit" style={theme.light.neuLight}>Send</button>
          {message && <span style={theme.light.neu2Light}>Thanks, I'll reply ASAP </span>}
        </form>
      </div>
    </div>
  );
}