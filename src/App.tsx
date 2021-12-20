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
import { Draw } from './Draw';

import { History } from './History';
import { getLastSession, storeSession, storeBrew } from './Sessions';
import { getLabel } from './Label';

import './App.scss';
import { cls } from './utils';

const isPWA = () => (window.matchMedia('(display-mode: standalone)').matches) || ((window.navigator as any).standalone) || document.referrer.includes('android-app://');
const lastTea = getLastSession();
const lastBrew = lastTea.brews[lastTea.brews.length - 1] || {};
const nextBrewTime = (t: number) => t + 15;

function App() {
  const [id, setId] = useState(lastTea.id);
  const [name, setName] = useState(lastTea.name || 'Tea');
  const [color, setColor] = useState(lastTea.color || '');
  const [brewNumber, _setBrew] = useState(lastBrew.brewNumber || 0);
  const [temperature, setTemperature] = useState(lastBrew.temperature || 0);
  const [isCelsius, setIsCelsius] = useState(lastBrew.temperatureUnit === 'C');
  const [weight, setWeight] = useState(lastBrew.weight || 0);
  const [isMassWeight, setIsMassWeight] = useState(lastBrew.weightUnit === 'g');
  const [water, setWater] = useState(lastBrew.water || 0);
  const [isMassWater, setIsMassWater] = useState(lastBrew.waterUnit === 'g');
  const [time, setTime] = useState(lastBrew.time || nextBrewTime(0));
  const [lastTime, setLastTime] = useState(time);

  const [page, setPage] = useState('main');
  const [selected, setSelected] = useState('');
  const [autoBrewTime, setAutoBrewTime] = useState(true);

  const [isTicking, setIsTicking] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isOut, setIsOut] = useState(false);

  const brew = {
    brewNumber,
    time: lastTime,
    temperature,
    weight,
    water,
    temperatureUnit: isCelsius ? 'C' : 'F',
    waterUnit: isMassWater ? 'g' : 'ml',
    weightUnit: isMassWeight ? 'g' : 'tsp',
  }

  const session = {
    id,
    name,
    color,
  }


  const onOld = () => {
    if (id === 1 && brewNumber === 0) {
      return;
    }
    setPage('history');
  }

  const onBack = () => {
    setPage('main');
  }

  const reset = () => {
    setName('Tea');
    setColor('');
    setSelected('');
    setBrew(0);
    setWater(0);
    setTemperature(0);
    setWeight(0);
    setTime(autoBrewTime ? nextBrewTime(0) : 0);
    setIsDone(false);
    setIsTicking(false);
    setIsOut(false);
    setId(id + 1);
  }

  const setBrew = (count: number) => {
    setIsTicking(!isTicking)
    setIsDone(false);
    setIsOut(false);
    if (autoBrewTime) {
      setLastTime(nextBrewTime(time));
    }
    return _setBrew(count);
  }

  const startBrewing = () => {
    if (!isTicking) {
      setSelected('brew');
      const nextNumber = brewNumber + 1;
      setBrew(nextNumber);
    }
    setPage('draw');
  }


  const tick = () => {
    if (!isTicking) {
      return () => { };
    }
    const timer = setTimeout(() => {
      setTime(time - 1);
      if (time <= 0) {
        setIsTicking(false);
        setIsDone(true);
        setTime(0);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    }

  }
  useEffect(() => {
    tick();
  }, [isTicking, time]);

  const removeOverlay = () => {
    if (isDone && isOut) {
      setTimeout(() => {
        setIsDone(false)
        setSelected('overlay')
      }, 200);
    }
  }
  useEffect(() => {
    removeOverlay()
  }, [isDone, isOut]);


  const store = () => {
    if (brewNumber === 0) {
      return;
    }
    storeSession(session);
    storeBrew(session, brew);
  }
  useEffect(() => {
    store();
  }, [brewNumber]);


  const classes = cls([
    'main',
    isPWA() ? 'pwa' : '',
    selected ? 'selecting' : '',
  ]);

  if (page === 'history') {

    return (
      <main>
        <History onBack={onBack} />
        <Overlay isDone={isDone} isOut={isOut} setIsOut={setIsOut} setTime={setTime} lastTime={lastTime} />
      </main>
    );
  }

  if (page === 'draw') {
    const label = getLabel(id, brewNumber);
    return (
      <main className="draw">
        <article>
          <Draw
            start={() => { }}
            back={() => setPage('main')}
            isDone={isDone}
            label={label}
            id={`${id}-${brewNumber}`}
          />
          <Timer selected={selected} setSelected={setSelected} time={time} setTime={setTime} />
          <Overlay isDone={isDone} isOut={isOut} setIsOut={setIsOut} setTime={setTime} lastTime={lastTime} />
        </article>
      </main>
    );
  };

  return (
    <main >
      <article className={classes}>
        <p className="pwa">
          {isPWA() ? 'pwa' : 'web'}
        </p>
        <Controls onOld={onOld} onNew={reset} />
        <Name selected={selected} setSelected={setSelected} name={name} setName={setName} />

        <Temperature selected={selected} setSelected={setSelected} temperature={temperature} setTemperature={setTemperature} isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
        <Color selected={selected} setSelected={setSelected} color={color} setColor={setColor} />

        <Weight selected={selected} setSelected={setSelected} weight={weight} setWeight={setWeight} isMass={isMassWeight} setIsMass={setIsMassWeight} />
        <Water selected={selected} setSelected={setSelected} water={water} setWater={setWater} isMass={isMassWater} setIsMass={setIsMassWater} />

        <Timer selected={selected} setSelected={setSelected} time={time} setTime={setTime} />
        <Brew selected={selected} brew={brewNumber} onClick={startBrewing} />
        <div className="sip">sip</div>
      </article>

      <Overlay isDone={isDone} isOut={isOut} setIsOut={setIsOut} setTime={setTime} lastTime={lastTime} />
    </main>
  );
}



export default App;
