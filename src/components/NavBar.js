import React from 'react';
import '../styles/index.css';
import { pixel } from './Pixels';

function NavBar() {
  return (
    <React.Fragment>
      <div
        className="option-experience NavBar box"
        style={{
          left: pixel.pixelX(2),
          top: pixel.pixelY(1),
          width: pixel.pixelWidth(5),
          height: pixel.pixelHeight(1),
        }}
      >
        <li>
          <a>EXPERIENCIA </a>
        </li>
      </div>
      <div
        className="option-experience NavBar box"
        style={{
          left: pixel.pixelX(8),
          top: pixel.pixelY(1),
          width: pixel.pixelWidth(5),
          height: pixel.pixelHeight(1),
        }}
      >
        <li>
          <a>¿QUIEN SOY?</a>
        </li>
      </div>
      <div
        className="option-experience NavBar box"
        style={{
          left: pixel.pixelX(14),
          top: pixel.pixelY(1),
          width: pixel.pixelWidth(4),
          height: pixel.pixelHeight(1),
        }}
      >
        <li>
          <a>PROYECTOS</a>
        </li>
      </div>
      <div
        className="option-experience NavBar box"
        style={{
          left: pixel.pixelX(19),
          top: pixel.pixelY(1),
          width: pixel.pixelWidth(4),
          height: pixel.pixelHeight(1),
        }}
      >
        <li>
          <a>CONTACTO</a>
        </li>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
