import React from 'react';
import EmiPhoto from '../images/Facha😎.png';

export default function AboutMe() {
  return (
    <React.Fragment>
      <section className="Sections-pixeles Section2">
        <article className="AboutMe-info box1">
          <h1>¿Quien soy?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            aperiam veniam tempora magni saepe quia fuga repudiandae deserunt
            dolores quae, blanditiis repellat sint debitis nobis maiores fugit
            inventore aut ut.
          </p>
        </article>
        <figure className="imgAboutMe-container">
          <img src={EmiPhoto} alt="test" />
        </figure>
      </section>
    </React.Fragment>
  );
}
