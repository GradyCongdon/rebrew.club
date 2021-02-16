import React from 'react';
import { cls } from '../utils';
import './Brew.scss';

interface BrewProps {
    brew: number;
    setBrew: any;
    selected: string
    setSelected: any
    isTicking: boolean
}

export const Brew = ({ brew, setBrew, selected, setSelected, isTicking }: BrewProps) => {
    const classes = cls([
        'brew',
        selected === 'brew' ? 'selected' : '',
    ]);
    const number = `number-${brew}`;
    const onClick = () => {
        if (!isTicking) {
            setSelected('brew');
            setBrew(++brew);
        }
    }
    return (
        <section className={classes}>
            <button onClick={onClick}>
                <div className="text">
                    <label>Brew</label>
                    <h2 className={'count ' + number}>{brew}</h2>
                </div>
            </button>
        </section>
    );
}