import React, { useState } from 'react';
import { cls, parseAmountInput } from '../utils';
import './Water.scss';

interface WaterProps {
    water: number
    setWater: any
    isMass: boolean
    setIsMass: any
    selected: string
    setSelected: any
}

export const Water = ({ water, setWater, isMass, setIsMass, selected, setSelected }: WaterProps) => {
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
    const classes = cls([
        'water',
        selected === 'water' ? 'selected' : ''
    ])
    return (
        <section className={classes} >
            <input
                type="tel"
                className="input--water glass"
                value={water}
                onClick={(e) => setSelected('water')}
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