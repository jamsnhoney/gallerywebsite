import React from "react";
import "../pretty/Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-container">
        <div className="contact-header-section">
          <h1 className="contact-header">hey.ᐟ  let's connect ⛇☃︎</h1>
          {/* <p className="contact-location">i'm based in Toronto, ON. say hi!</p> */}
        </div>
        <div className="contact-items">
          <div className="contact-item">
            <span className="contact-label">email</span>
            <a href="mailto:zhuu.amanda@gmail.com" className="contact-link">zhuu.amanda@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">instagram</span>
            <a
              href="https://www.instagram.com/a_zoo_studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              @a_zoo_studio
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">linkedin</span>
            <a
              href="https://www.linkedin.com/in/amanda-zhu-b01422242/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              amanda-zhu ⛾
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">twitter x</span>
            <a
              href="https://x.com/amsamszhuzhu"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              @amsamszhuzhu
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">a good time</span>
            <a
              href="https://www.youtube.com/watch?v=V7KjHLRGdrc"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              trust-me-bro
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
