import React from 'react';
import { rand0 } from '../utils';
import './Water.scss';



export const Water = () => {
    const water = rand0(300) + 99;
    return (
        <section className="water">
            <div className="value">
                <div className="glass">
                    <h2 className="amount">{water}</h2>
                </div>
            </div>
            <div className="label">
                <h3 className="amount-label oz">oz</h3>
                <h3 className="amount-label g active">g</h3>
            </div>
        </section>
    );
}