import React from 'react';

import { Brew } from './Brew';
import { Controls } from './Controls';
import { Color } from './Color';
import { Timer } from './Timer';

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

const Weight = () => {
  const weight = 12;
  return (
    <section className="weight">
      <div className="diamond">
        <input type="text" value={weight} />
        <h2>{weight}</h2>
      </div>
      <button>tsp</button>
      <button>g</button>
    </section>
  );

}

const Water = () => {
  const water = 333;
  return (
    <section className="water">
      <div className="glass">
        <input type="text" value={water} />
        <h2>{water}</h2>
      </div>
      <button>oz</button>
      <button>g</button>
    </section>
  );
}




export default App;
