import { useState } from "react";
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
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right neu">
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
          <button type="submit" className="neu">Send</button>
          {message && <span className="neu2">Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
