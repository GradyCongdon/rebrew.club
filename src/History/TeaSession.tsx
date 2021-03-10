import React from 'react';
import { BrewSession, BrewSessionType, mockBrews } from "./BrewSession";

export interface TeaSession {
    id: string;
    name: string;
    color: string;
    brews: BrewSessionType[];
}

interface TeaSessionProps {
    session: TeaSession;
}

export const mockTeaSession = {
    id: '001',
    name: 'Hairy Crab',
    color: 'oolong',
    brews: mockBrews,
}

export const TeaSession = ({ session }: TeaSessionProps) => {
    const { id, name, color, brews } = session;
    const $brews = brews.map(b => <BrewSession key={`${id}-${b.brewNumber}`} brew={b} />);
    return (
        <article className="tea-session">
            <div className="header">
                <span>
                    <span className="name">
                        {name}
                    </span>- {color}
                </span>
                <span className="id">
                    ({id})
                </span>
            </div>
            <div className="labels">
                <span className="labels-brew-number">brew</span>
                <span>time</span>
                <span>temperature</span>
                <span>water</span>
            </div>
            {$brews}
        </article>
    );
};
