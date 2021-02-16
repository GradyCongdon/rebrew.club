import React, { useState } from 'react';
import { cls, parseAmountInput } from '../utils';
import './Timer.scss'


const values = (x: number) => {
    x = x < 0 ? 0 : x;
    const str = x < 10 ? `0${x}` : `${x}`;
    return str
        .split('')
        .map((c: string, i: number) => (
            <h2 key={`${i}-${c}`} className="value">{c}</h2>
        ));
}

interface TimerProps {
    minutes: number
    seconds: number
    setMinutes: any
    setSeconds: any
    selected: string
    setSelected: any
}

export const Timer = ({ minutes, setMinutes, seconds, setSeconds, selected, setSelected }: TimerProps) => {
    const $min = values(minutes);
    const $sec = values(seconds);
    const classes = cls([
        'timer',
        selected === 'timer' ? 'selected' : ''
    ])
    return (
        <section className={classes} >
            <section className="capsule min">
                <input
                    type="tel"
                    className="input--timer"
                    value={minutes}
                    onClick={(e) => setSelected('timer')}
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
                    value={seconds}
                    onClick={(e) => setSelected('timer')}
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