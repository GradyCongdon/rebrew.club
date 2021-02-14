import React from 'react';

import { Brew } from './Brew';
import { Controls } from './Controls';
import { Color } from './Color';
import { Timer } from './Timer';
import { Weight } from './Weight';
import { Water } from './Water';

import './App.scss';

function App() {
  return (
    <main>
      <Controls />
      <Name />
      <Color />
      <Weight />
      <Water />
      <Timer />
      <Brew />
    </main>
  );
}



const Name = () => {
  return (
    <section className="f-cc name">
      <h1 className="name__name">Tai Ping Hou Kui</h1>
    </section>
  );
}

export default App;
