import React from "react";

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h1 className="Contacth1">Contact Me</h1>
        <p className="text-lg">Let's Connect!</p>
      </div>
      <div className="contact--links">
        <a href="mailto:your-email@gmail.com" className="contact--link">
          <img src="gmail-icon.png" alt="Gmail" />
        </a>
        <a
          href="https://www.linkedin.com/in/sachin-kumar-dagar-a430521ba/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact--link"
        >
          <img src="linkedin-icon.png" alt="LinkedIn" />
        </a>
      </div>
    </section>
  );
}
