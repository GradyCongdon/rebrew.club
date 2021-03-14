import React from 'react';
import { BrewSession, BrewSessionType, mockBrews } from "./BrewSession";
import './Sessions.scss';

export interface TeaSession {
    id: number;
    name: string;
    color: string;
    brews: BrewSessionType[];
}

interface TeaSessionProps {
    session: TeaSession;
}

export const mockTeaSession = {
    id: 1,
    name: 'Hairy Crab',
    color: 'oolong',
    brews: mockBrews,
}


export const TeaSession = ({ session }: TeaSessionProps) => {
    const { id: _id, name, color, brews } = session;
    const id = _id.toString().padStart(3, '0');
    const $brews = brews.map(b => <BrewSession key={`${id}-${b.brewNumber}`} brew={b} />);
    return (
        <article className="tea-session">
            <div className="header">
                <span>
                    <span className="name">
                        {name === 'Tea' ? <span className="mystery">???</span> : name}
                    </span>{color ? '-' : null} {color}
                </span>
                <span className="id">
                    <span className="light">(</span>
                    {id}
                    <span className="light">)</span>
                </span>
            </div>
            <div className="labels">
                <span className="labels-brew-number">brew</span>
                <span>time</span>
                <span>weight</span>
                <span>temperature</span>
                <span>water</span>
            </div>
            {$brews}
        </article>
    );
};
