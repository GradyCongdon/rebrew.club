import React from 'react';
import { rand0 } from '../utils'
import './Timer.scss'

const values = (x: string) => x.split('').map(([c, i]: any) => (<h2 key={`${i}-${c}`} className="value">{c}</h2>));

export const Timer = () => {
    const min = `0${rand0(3)}`;
    const sec = `${rand0(5)}${rand0(9)}`;
    const $minValues = values(min);
    const $secValues = values(sec);
    return (
        <section className="timer">
            <section className="capsule min">
                <label className="label">
                    min
                </label>
                <div className="values">
                    {$minValues}
                </div>
            </section>

            <section className="capsule sec">
                <label className="label">
                    sec
                </label>
                <div className="values">
                    {$secValues}
                </div>
            </section>
        </section>
    );
}