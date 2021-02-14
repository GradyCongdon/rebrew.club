import React from 'react';
import { rand0 } from '../utils';
import './Weight.scss';



export const Weight = () => {
    const weight = rand0(20);
    return (
        <section className="weight">
            <div className="diamond"></div>
            <h2 className="value">{weight}</h2>
            <h3 className="amount-label vol tsp">tsp</h3>
            <h3 className="amount-label mass g active">g</h3>
        </section>
    );
}