import React, { useState } from 'react';
import { parseAmountInput } from '../utils';
import './Water.scss';

export const Water = () => {
    const [water, setWater] = useState(0);
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
                <button className="amount-label oz">oz</button>
                <button className="amount-label g active">g</button>
            </div>
        </section>
    );
}