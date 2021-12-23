import React from 'react';
import BoxTech from './Box-tech';
import JS from '../images/icons/IconJS.svg';
import HTML from '../images/icons/iconHtml.svg';
import CSS from '../images/icons/iconCss.svg';
import ReactIcon from '../images/icons/iconReact.svg';
import XD from '../images/icons/iconXd.svg';
import Photoshop from '../images/icons/iconPhotoshop.svg';
import Git from '../images/icons/iconGit.svg';
import Github from '../images/icons/iconGithub.svg';

export default function Skils() {
  return (
    <React.Fragment>
      <section className="Sections-pixeles Section3">
        <article className="Skils-info box2">
          <h1>MIS SKILS TECNOLOGICAS</h1>
          <p>
            En lo que va mi camino de desarrollador e logrado aprender varias
            tecnologías que me han sido utiles para la realización de mis
            proyectos (planeo aprender muchas mas).
          </p>
        </article>
        <div className="Skils-container">
          <BoxTech icon={JS} />
          <BoxTech icon={ReactIcon} />
          <BoxTech icon={Git} />
          <BoxTech icon={HTML} />
          <BoxTech icon={XD} />
          <BoxTech icon={Github} />
          <BoxTech icon={CSS} />
          <BoxTech icon={Photoshop} />
        </div>
      </section>
    </React.Fragment>
  );
}
