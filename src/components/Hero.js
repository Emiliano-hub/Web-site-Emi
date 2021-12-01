import React, { Component, createRef } from 'react';
import '../styles/index.css';
import '../styles/App.scss';
import NavBar from './NavBar';
import Header from './Header';
import Mario from '../images/mario.png';

export default class section1 extends Component {
  constructor(props) {
    super(props);
    this.descriptionHero = createRef();
  }
  render() {
    let descriptionHero = this.descriptionHero;
    this.handleClick = (e) => {
      console.log(descriptionHero.current);
    };
    return (
      <React.Fragment>
        <section className="Sections-pixeles Section1">
          <Header />
          <NavBar />
          <div
            className="description-box box"
            ref={this.descriptionHero}
            onClick={this.handleClick}
            style={this.descriptionBox}
          >
            <p>Hola soy </p>
          </div>
          <div className="name-box box">
            <p>EMILIANO FARIAS</p>
          </div>
          <div className="job-box box">
            <p>Desarrollador frontend</p>
          </div>
          <div className="country-box box">
            <p>ARGENTINO</p>
          </div>
          <figure className="imgHeroContainer">
            <img src={Mario} alt="test" />
          </figure>
        </section>
      </React.Fragment>
    );
  }
}
