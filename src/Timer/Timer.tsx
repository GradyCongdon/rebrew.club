import React from 'react';
import { cls, parseAmountInput, scrollInput } from '../utils';
import './Timer.scss'


const minSec = (time: number): number[] => {
    const min = Math.floor(time / 60);
    const sec = time - (min * 60);
    return [min, sec];
}

const valueNodes = (x: number) => {
    x = x < 0 ? 0 : x;
    const str = x < 10 ? `0${x}` : `${x}`;
    return str
        .split('')
        .map((c: string, i: number) => (
            <h2 key={`${i}-${c}`} className="value">{c}</h2>
        ));
}

interface TimerProps {
    time: number
    setTime: any
    selected: string
    setSelected: any
}

export const Timer = ({ time, setTime, selected, setSelected }: TimerProps) => {
    const [min, sec] = minSec(time);
    const setMinutes = (newMin: number) => {
        const t = (newMin * 60) + sec;
        setTime(t);
    }
    const setSeconds = (newSec: number) => {
        const t = (min * 60) + newSec;
        setTime(t);
    }

    const $min = valueNodes(min);
    const $sec = valueNodes(sec);
    const classes = cls([
        'timer',
        selected === 'minutes' ? 'selected-min' : '',
        selected === 'seconds' ? 'selected-sec' : ''
    ])

    const onClickMinutes = (e: any) => {
        scrollInput(e);
        setSelected('minutes');
    }

    const onClickSeconds = (e: any) => {
        scrollInput(e);
        setSelected('seconds');
    }
    return (
        <section className={classes} >
            <section className="capsule min">
                <input
                    type="tel"
                    className="input--timer"
                    value={min}
                    onClick={onClickMinutes}
                    onChange={(e) => setMinutes(parseAmountInput(9, e))} />
                <label className="label">
                    min
                </label>
                <div className="values">
                    {$min}
                </div>
            </section>

            <section className="capsule sec">
                <input
                    type="tel"
                    className="input--timer"
                    value={sec}
                    onClick={onClickSeconds}
                    onChange={(e) => setSeconds(parseAmountInput(59, e))} />
                <label className="label">
                    sec
                </label>
                <div className="values">
                    {$sec}
                </div>
            </section>
        </section>
    );
}