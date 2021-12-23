import React from 'react';
import '../styles/index.css';

function NavBar() {
  return (
    <React.Fragment>
      <nav>
        <li className="Option-Blog box">
          <a>MI BLOG </a>
        </li>
        <li className="Option-AboutMe box">
          <a href="#WhoIAm">¿QUIEN SOY?</a>
        </li>

        <li className="Option-Proyects box">
          <a href="#Proyects">PROYECTOS</a>
        </li>
        <li className="Option-Contact box">
          <a href="mailto:emiliano.2.farias@hotmail.com">CONTACTO</a>
        </li>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
