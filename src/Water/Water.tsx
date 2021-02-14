import React, { useState } from 'react';
import { cls, parseAmountInput } from '../utils';
import './Water.scss';

interface WaterProps {
    water: number,
    setWater: any,
    isMass: boolean;
    setIsMass: any
}

export const Water = ({ water, setWater, isMass, setIsMass }: WaterProps) => {
    const ozClasses = cls([
        'amount-label',
        'oz',
        isMass ? '' : 'active',
    ]);
    const gClasses = cls([
        'amount-label',
        'g',
        isMass ? 'active' : '',
    ]);
    return (
        <section className="water">
            <input
                type="tel"
                className="input--water"
                value={water}
                onChange={(e) => setWater(parseAmountInput(999, e))} />
            <div className="value">
                <div className="glass">
                    <h2 className="amount">{water}</h2>
                </div>
            </div>
            <div className="label">
                <button className={ozClasses} onClick={() => setIsMass(false)}>oz</button>
                <button className={gClasses} onClick={() => setIsMass(true)}>g</button>
            </div>
        </section>
    );
}