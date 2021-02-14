import React, { useState } from 'react';
import { parseAmountInput } from '../utils';
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
}

export const Timer = ({ minutes, setMinutes, seconds, setSeconds }: TimerProps) => {
    const $min = values(minutes);
    const $sec = values(seconds);
    return (
        <section className="timer">
            <section className="capsule min">
                <input
                    type="tel"
                    className="input--timer"
                    value={minutes}
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