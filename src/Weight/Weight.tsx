import React, { useState } from 'react';
import { parseAmountInput } from '../utils';
import './Weight.scss';

export const Weight = () => {
    const [weight, setWeight] = useState(0);
    return (
        <section className="weight">
            <input
                type="tel"
                className="input--weight"
                value={weight}
                onChange={(e) => setWeight(parseAmountInput(99, e))} />
            <div className="diamond">
                <button className="amount-label vol tsp">tsp</button>
                <h2 className="value">{weight}</h2>
                <button className="amount-label mass g active">g</button>
            </div>
        </section>
    );
}