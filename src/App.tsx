import { useEffect, useState } from 'react';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

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


const idState = atom({
  key: 'idState',
  default: lastTea.id,
})

export const colorState = atom({
  key: 'colorState',
  default: lastTea.color || '',
})

export const selectedState = atom({
  key: 'selectedState',
  default: '',
});

export const temperatureState = atom({
  key: 'temperatureState',
  default: lastBrew.temperature || 0,
});

export const temperatureUnitState = atom({
  key: 'temperatureUnitState',
  default: lastBrew.temperatureUnit || 'F',
});

export const weightState = atom({
  key: 'weightState',
  default: lastBrew.weight || 0,
});

export const weightUnitState = atom({
  key: 'weightUnitState',
  default: lastBrew.weightUnit || 'g',
});

export const waterState = atom({
  key: 'waterState',
  default: lastBrew.water || 0,
});

export const waterUnitState = atom({
  key: 'waterUnitState',
  default: lastBrew.waterUnit || 'g',
});

export const timeState = atom({
  key: 'timeState',
  default: lastBrew.time || nextBrewTime(0),
});

export const lastTimeState = atom({
  key: 'lastTimeState',
  default: lastBrew.time || nextBrewTime(0),
});

export const nameState = atom({
  key: 'nameState',
  default: lastTea.name || 'Tea',
});

export const brewNumberState = atom({
  key: 'brewNumberState',
  default: lastBrew.brewNumber || 0,
});

export const pageState = atom({
  key: 'pageState',
  default: "main",
});

export const isTickingState = atom({
  key: 'isTickingState',
  default: false,
});


function App() {
  const [id, setId] = useRecoilState(idState);

  const [name, setName] = useRecoilState(nameState);
  const [color, setColor] = useRecoilState(colorState);
  const [brewNumber, _setBrew] = useRecoilState(brewNumberState);

  const [temperature, setTemperature] = useRecoilState(temperatureState);
  const [temperatureUnit] = useRecoilState(temperatureUnitState);

  const [water, setWater] = useRecoilState(waterState);
  const [waterUnit] = useRecoilState(waterUnitState);

  const [weight, setWeight] = useRecoilState(weightState);
  const [weightUnit] = useRecoilState(weightUnitState);

  const [time, setTime] = useRecoilState(timeState);
  const [lastTime, setLastTime] = useRecoilState(lastTimeState);

  const [page, setPage] = useRecoilState(pageState);
  const [selected, setSelected] = useRecoilState(selectedState);

  const [isTicking, setIsTicking] = useRecoilState(isTickingState);

  const [autoBrewTime, setAutoBrewTime] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const [isOut, setIsOut] = useState(false);

  const brew = {
    brewNumber,
    time: lastTime,
    temperature,
    weight,
    water,
    temperatureUnit,
    waterUnit,
    weightUnit,
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

  const clearOverlay = () => {
    setIsOut(true);
    setTime(lastTime);
  }

  if (page === 'history') {

    return (
      <main>
        <History onBack={onBack} />
        <Overlay isDone={isDone} isOut={isOut} clearOverlay={clearOverlay} />
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
          <Timer />
          <Overlay isDone={isDone} isOut={isOut} clearOverlay={clearOverlay} />
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
        <Name name={name} setName={setName} />

        <Temperature />
        <Color />

        <Weight />
        <Water />

        <Timer />
        <Brew onClick={startBrewing} />
        <div className="sip">sip</div>
      </article>

      <Overlay isDone={isDone} isOut={isOut} clearOverlay={clearOverlay} />
    </main>
  );
}



export default App;
