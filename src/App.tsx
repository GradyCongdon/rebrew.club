import React, { useEffect, useState } from 'react';

import { Brew } from './Brew';
import { Controls } from './Controls';
import { Color } from './Color';
import { Temperature } from './Temperature';
import { Timer } from './Timer';
import { Name } from './Name';
import { Overlay } from './Overlay';
import { Weight } from './Weight';
import { Water } from './Water';

import './App.scss';

function App() {
  const [name, setName] = useState('Tea');
  const [selected, setSelected] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [isCelsius, setIsCelsius] = useState(true);
  const [color, setColor] = useState('');
  const [weight, setWeight] = useState(0);
  const [isMassWeight, setIsMassWeight] = useState(true);
  const [water, setWater] = useState(0);
  const [isMassWater, setIsMassWater] = useState(true);
  const [brew, _setBrew] = useState(0);
  const [isTicking, setIsTicking] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isOut, setIsOut] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(15);
  const [lastTime, setLastTime] = useState(seconds);

  const reset = () => {
    setName('Tea');
    setColor('');
    setSelected('');
    setBrew(0);
    setWater(0);
    setTemperature(0);
    setWeight(0);
    setSeconds(0);
    setMinutes(0);
    setIsDone(false);
    setIsTicking(false);
    setIsOut(false);
  }

  const setBrew = (count: number) => {
    setIsTicking(!isTicking)
    setIsDone(false);
    setIsOut(false);
    setLastTime(seconds + 15);
    return _setBrew(count);
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
  }, [isTicking, seconds]);

  useEffect(() => {
    if (isDone && isOut) {
      setTimeout(() => {
        setIsDone(false)
        setSelected('overlay')
      }, 200);
    }
  }, [isDone, isOut]);



  return (
    <main className="pwa" >
      <Controls onNew={reset} />
      <Name selected={selected} setSelected={setSelected} name={name} setName={setName} />
      <Temperature selected={selected} setSelected={setSelected} temperature={temperature} setTemperature={setTemperature} isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
      <Color selected={selected} setSelected={setSelected} color={color} setColor={setColor} />
      <Weight selected={selected} setSelected={setSelected} weight={weight} setWeight={setWeight} isMass={isMassWeight} setIsMass={setIsMassWeight} />
      <Water selected={selected} setSelected={setSelected} water={water} setWater={setWater} isMass={isMassWater} setIsMass={setIsMassWater} />
      <Brew selected={selected} setSelected={setSelected} isTicking={isTicking} brew={brew} setBrew={setBrew} />
      <Timer selected={selected} setSelected={setSelected} minutes={minutes} setMinutes={setMinutes} seconds={seconds} setSeconds={setSeconds} />
      <Overlay isDone={isDone} isOut={isOut} setIsOut={setIsOut} setTime={setSeconds} lastTime={lastTime} />
    </main>
  );
}



export default App;
