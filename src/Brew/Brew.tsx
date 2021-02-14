import React from 'react';
import './Brew.scss';

export const Brew = () => {
    const count = Math.floor(Math.random() * 6) + 1;
    const number = `number-${count}`;
    return (
        <section className="brew">
            <div className="text">
                <label>Brew</label>
                <h2 className={'count ' + number}>{count}</h2>
            </div>
        </section>
    );
}