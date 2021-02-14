import React from 'react';
import './Brew.scss';

interface BrewProps {
    brew: number;
    setBrew: any;
}

export const Brew = ({ brew, setBrew }: BrewProps) => {
    const number = `number-${brew}`;
    return (
        <section className="brew">
            <button onClick={() => setBrew(++brew)}>
                <div className="text">
                    <label>Brew</label>
                    <h2 className={'count ' + number}>{brew}</h2>
                </div>
            </button>
        </section>
    );
}