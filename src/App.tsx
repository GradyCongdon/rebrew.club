import React, { useEffect, useState } from 'react';

import { Brew } from './Brew';
import { Controls } from './Controls';
import { Color } from './Color';
import { Timer } from './Timer';
import { Name } from './Name';
import { Weight } from './Weight';
import { Water } from './Water';

import './App.scss';
import { cls } from './utils';

function App() {
  const [name, setName] = useState('Tai Ping Hou Kui');
  const [color, setColor] = useState('');
  const [weight, setWeight] = useState(0);
  const [isMassWeight, setIsMassWeight] = useState(true);
  const [water, setWater] = useState(0);
  const [isMassWater, setIsMassWater] = useState(true);
  const [brew, _setBrew] = useState(0);
  const [isTicking, setIsTicking] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [lastTime, setLastTime] = useState(seconds);

  const setBrew = (x: number) => {
    setIsTicking(!isTicking)
    setIsDone(false);
    setLastTime(seconds);
    return _setBrew(x);
  }

  useEffect(() => {
    if (!isTicking) {
      return () => { };
    }
    const timer = setTimeout(() => {
      setSeconds(seconds - 1);
      if (seconds <= 0) {
        setIsTicking(false);
        setIsDone(true);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    }
  });

  const overlayClasses = cls([
    'overlay',
    isDone ? 'done' : '',
  ]);

  return (
    <main >
      <div onClick={() => {
        setIsDone(false);
        setSeconds(lastTime);
      }} className={overlayClasses}></div>
        <Controls />
      <Name name={name} setName={setName} />
      <Color color={color} setColor={setColor} />
      <Weight weight={weight} setWeight={setWeight} isMass={isMassWeight} setIsMass={setIsMassWeight} />
      <Water water={water} setWater={setWater} isMass={isMassWater} setIsMass={setIsMassWater} />
      <Brew brew={brew} setBrew={setBrew} />
      <Timer minutes={minutes} setMinutes={setMinutes} seconds={seconds} setSeconds={setSeconds} />
      </main>
  );
}



export default App;
