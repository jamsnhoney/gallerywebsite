import React from "react";
import "../pretty/Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-container">
        <div className="contact-left">
          <h1 className="contact-header">helloooo! let's connect.</h1>
          <p className="contact-location">i'm located in Toronto, ON. say hi!</p>
          <div className="contact-labels">
            <span>email</span>
            <span>instagram</span>
            <span>linkedin</span>
            <span>suprise</span>
          </div>
        </div>
        <div className="contact-right">
          <a href="mailto:zhuu.amanda@gmail.com">zhuu.amanda@gmail.com</a>
          <a
            href="https://www.instagram.com/a_zoo_studio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @a_zoo_studio
          </a>
          <a
            href="https://www.linkedin.com/in/amanda-zhu-b01422242/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedinnnn
          </a>
          <a
            href="https://www.youtube.com/watch?v=V7KjHLRGdrc"
            target="_blank"
            rel="noopener noreferrer"
          >
            suprise!
          </a>
        </div>
      </div>
    </main>
  );
}

export default Contact;
