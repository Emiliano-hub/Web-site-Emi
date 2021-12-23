import React, { Component } from 'react';
import Proyect from './proyect';
import logoSkul from '../images/proyectsImg/logo120.png';
import declarationJoke from '../images/proyectsImg/declarationJoke.svg';
import findTreasure from '../images/proyectsImg/FindTreasure.svg';

export default class Proyects extends Component {
  render() {
    return (
      <section className="Sections-pixeles Section4" id="Proyects">
        <div className="Title-SectionProyects box5">
          <h1>PROYECTOS</h1>
        </div>
        <div className="Proyects-Container">
          <Proyect
            img={logoSkul}
            titleProyect="PAGINA ESCOLAR"
            textProyect="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <Proyect
            img={declarationJoke}
            titleProyect="DECLARACION EN BROMA"
            textProyect="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <Proyect
            img={logoSkul}
            titleProyect="PAGINA ESCOLAR"
            textProyect="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <Proyect
            img={findTreasure}
            titleProyect="ENCUENTRA EL TESORO"
            textProyect="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
        </div>
      </section>
    );
  }
}
