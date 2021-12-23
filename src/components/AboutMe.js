import React from 'react';
import EmiPhoto from '../images/Facha😎.png';

export default function AboutMe() {
  return (
    <React.Fragment>
      <section className="Sections-pixeles Section2" id="WhoIAm">
        <article className="AboutMe-info box1">
          <h1>¿Quien soy?</h1>
          <p>
            Hola, mi nombre es Emiliano Farias un chico Argentino de 18 años
            amante de la ciencia y la tecnología, el aprender es algo que forma
            parte de mi día a día y es un camino que planeo seguir por el resto
            de mi vida aprovechando cada una de las oportunidades que se me
            presenten.
          </p>
        </article>
        <figure className="imgAboutMe-container">
          <img src={EmiPhoto} alt="test" />
        </figure>
      </section>
    </React.Fragment>
  );
}
