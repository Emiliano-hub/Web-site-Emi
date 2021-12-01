import React from 'react';
import '../styles/index.css';
import '../styles/App.scss';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Skils from './Skils';
import Footer from './Footer.js';

function App() {
  return (
    <React.Fragment>
      <Hero />
      <AboutMe />
      <Skils />
      <Footer />
    </React.Fragment>
  );
}

export default App;
