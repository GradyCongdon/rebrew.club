import React from 'react';
import './Timer.scss'

const values = (x:string) => x.split('').map(c => (<h2 className="value">{c}</h2>));

export const Timer = () => {
    const min = '01';
    const sec = '30';
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
                <h2 className="values">
                    {$secValues}
                </h2>
            </section>
        </section>
    );
}