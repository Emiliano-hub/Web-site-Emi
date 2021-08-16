import React from 'react';
import '../styles/App.css';
import Hero from './Hero';

function App() {
  return (
    <React.Fragment>
      <Hero />
    </React.Fragment>
  );
}

// elements = [];
// for (let i = 0; i < 500; i++) {
//   (elements[i] = document.createElement('div')),
//     elements[i].classList.add('box'),
//     section1.appendChild(elements[i]);
// }
export default App;
