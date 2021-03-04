import React, { useState } from 'react';
import { cls, parseAmountInput, scrollInput } from '../utils';
import './Weight.scss';

interface WeightProps {
    weight: number;
    setWeight: any;
    isMass: boolean;
    setIsMass: any;
    selected: string;
    setSelected: any;
}

export const Weight = ({ weight, setWeight, isMass, setIsMass, selected, setSelected }: WeightProps) => {
    const tspClasses = cls([
        'amount-label',
        'tsp',
        isMass ? '' : 'active',
    ]);
    const gClasses = cls([
        'amount-label',
        'g',
        isMass ? 'active' : '',
    ]);

    const classes = cls([
        'weight',
        selected === 'weight' ? 'selected' : ''
    ]);

    const onClick = (e: any) => {
        scrollInput(e);
        setSelected('weight');
    }

    return (
        <section className={classes} >
            <input
                type="tel"
                className="input--weight"
                value={weight}
                onClick={onClick}
                onChange={(e) => setWeight(parseAmountInput(99, e))} />
            <div className="diamond">
                <button className={tspClasses} onClick={() => setIsMass(false)}>tsp</button>
                <h2 className="value">{weight}</h2>
                <button className={gClasses} onClick={() => setIsMass(true)}>g</button>
            </div>
        </section>
    );
}