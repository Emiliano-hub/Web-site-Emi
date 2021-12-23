import React from 'react';

export default function proyect(props) {
  return (
    <div className="linkProyect box5">
      <figure className="Img-Container">
        <img src={props.img} />
      </figure>
      <div className="Info-Proyect">
        <h2>{props.titleProyect}</h2>
        <p>{props.textProyect}</p>
      </div>
    </div>
  );
}
