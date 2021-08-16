import React from 'react';
import '../styles/index.css';
import '../styles/App.css';
import NavBar from './NavBar';
import { pixel } from './Pixels';

export default function section1() {
  // window.addEventListener('resize', changeScreen);
  // function changeScreen() {
  //   if (window.screen.width < 1024) alert('Pequeña');
  //   else if (window.screen.width < 1280) alert('Mediana');
  //   else alert('Grande');
  // }
  // if (window.screen.width < 1024) alert('Pequeña');
  // else if (window.screen.width < 1280) alert('Mediana');
  // else alert('Grande');

  return (
    <React.Fragment>
      <section className="Sections-pixeles">
        <NavBar />
        <div
          className="description-box box"
          style={{
            left: pixel.pixelX(2),
            top: pixel.pixelY(6),
            width: pixel.pixelWidth(10),
            height: pixel.pixelHeight(3),
          }}
        >
          <p>Hola soy </p>
        </div>
        <div
          className="name-box box"
          style={{
            left: pixel.pixelX(2),
            top: pixel.pixelY(9),
            width: pixel.pixelWidth(23),
            height: pixel.pixelHeight(3),
          }}
        >
          <p>EMILIANO FARIAS</p>
        </div>
        <div
          className="job-box box"
          style={{
            left: pixel.pixelX(2),
            top: pixel.pixelY(12),
            width: pixel.pixelWidth(27),
            height: pixel.pixelHeight(3),
          }}
        >
          <p>Desarrollador frontend</p>
        </div>
        <div
          className="country-box box"
          style={{
            left: pixel.pixelX(2),
            top: pixel.pixelY(15),
            width: pixel.pixelWidth(11),
            height: pixel.pixelHeight(3),
          }}
        >
          <p>ARGENTINO</p>
        </div>
      </section>
    </React.Fragment>
  );
}
