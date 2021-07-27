import React from 'react';
import '../styles/index.css';

function NavBar() {
  return (
    <React.Fragment>
      <div className="NavBar box">
        <div className="option-experience">
          <li>
            <a>EXPERIENCIA</a>
          </li>
        </div>
        <div className="option-experience">
          <li>
            <a>¿QUIEN SOY?</a>
          </li>
        </div>
        <div className="option-experience">
          <li>
            <a>PROYECTOS</a>
          </li>
        </div>
        <div className="option-experience">
          <li>
            <a>CONTACTO</a>
          </li>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
