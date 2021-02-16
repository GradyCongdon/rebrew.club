import React from 'react';
import { cls, parseAmountInput } from '../utils';
import './Temperature.scss';

interface temperatureProps {
    temperature: number
    setTemperature: any
    isCelsius: boolean
    setIsCelsius: any
    selected: string
    setSelected: any
}

export const Temperature = ({ temperature, setTemperature, isCelsius, setIsCelsius, selected, setSelected }: temperatureProps) => {
    const fClasses = cls([
        'amount-label',
        'fahrenheit',
        isCelsius ? '' : 'active',
    ]);
    const cClasses = cls([
        'amount-label',
        'celsius',
        isCelsius ? 'active' : '',
    ]);
    const classes = cls([
        'temperature',
        selected === 'temperature' ? 'selected' : '',
    ]);
    return (
        <section className={classes} >
            <input
                type="tel"
                className="input--temperature"
                value={temperature}
                onClick={() => setSelected('temperature')}
                onChange={(e) => setTemperature(parseAmountInput(212, e))} />
            <div className="value">
                <div className="circle">
                    <h2 className="amount">{temperature}</h2>
                </div>
            </div>
            <div className="label">
                <button className={fClasses} onClick={() => setIsCelsius(false)}>°F</button>
                <button className={cClasses} onClick={() => setIsCelsius(true)}>°C</button>
            </div>
        </section>
    );
}