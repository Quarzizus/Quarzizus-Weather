import React from "react";
import "../styles/components/Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <p>OpenWeatherApi</p>
      <div className="Footer_media">
        <p>Miguel Vásquez - Quarzizus</p>
        <div>
          <a
            href="https://github.com/Quarzizus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com/quarzizus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/quarzizus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
