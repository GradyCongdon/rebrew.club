import React from 'react';
import { cls, parseAmountInput } from '../utils';
import './Temperature.scss';

interface temperatureProps {
    temperature: number,
    setTemperature: any,
    isCelsius: boolean;
    setIsCelsius: any
}

export const Temperature = ({ temperature, setTemperature, isCelsius, setIsCelsius }: temperatureProps) => {
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
    return (
        <section className="temperature">
            <input
                type="tel"
                className="input--temperature"
                value={temperature}
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