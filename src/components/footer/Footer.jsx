import React from "react";
import "./footer.css";
//import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Nicole Conde</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://github.com/NicoleCondeDuque"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            Github {/*<FiGithub />*/}
          </a>
          <a
            href="https://www.linkedin.com/in/nicolecondeduque"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin {/*<FiLinkedin />*/}
          </a>
        </div>
        <span className="footer__copy"></span>
      </div>
    </footer>
  );
};

export default Footer;
