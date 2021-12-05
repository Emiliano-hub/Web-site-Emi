import React from 'react';
import twitter from '../images/icons-pixel/twitter.png';
import facebook from '../images/icons-pixel/facebook-pixel.png';
import github from '../images/icons-pixel/github_wihte.png';
import instagram from '../images/icons-pixel/logo-pixel-instagram.png';
import linkdIn from '../images/icons-pixel/linkdIn.png';

export default function Footer() {
  return (
    <footer>
      <div className="Contact-container">
        <div className="Title-contact box4">
          <h2>MI CONTACTO</h2>
        </div>
        <div className="contact-Option box4">
          <label>CREAMOS ALGO JUNTOS?</label>
          <a href="mailto:emiliano.2.farias@hotmail.com">CONTACTAME</a>
        </div>
      </div>
      <div className="SocialMedias-container">
        <div className="Title-socialMedias box4">
          <h2>SIGUEME EN LAS REDES SOCIALES</h2>
        </div>
        <div className="SocialMedias box4">
          <a href="https://twitter.com/DiegoEmilianoF5">
            <img src={twitter} alt="twitter" />
          </a>

          <a href="https://twitter.com/DiegoEmilianoF5">
            <img src={facebook} alt="twitter" />
          </a>
          <a href="https://twitter.com/DiegoEmilianoF5">
            <img src={github} alt="twitter" />
          </a>
          <a href="https://www.instagram.com/emilianodiego_f/">
            <img src={instagram} alt="twitter" />
          </a>
          <a href="https://twitter.com/DiegoEmilianoF5">
            <img src={linkdIn} alt="twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
}
