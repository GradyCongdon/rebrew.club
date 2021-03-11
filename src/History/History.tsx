import React from 'react';
import './History.scss';
import { mockTeaSession, TeaSession } from '../Sessions/TeaSession';
import { getSessions } from '../Sessions';

interface HistoryProps {
    // sessions: TeaSession[];
    onBack: any;
}

export const mockHistory = {
    sessions: [
        {
            ...mockTeaSession,
            id: 2,
            name: 'Mao Feng',
            color: 'black'
        },
        mockTeaSession,
    ]
}

export const History = ({ onBack }: HistoryProps) => {
    const sessions = getSessions();
    const $entries = sessions.map(e => <TeaSession key={e.id} session={e} />);
    return (
        <article className="history">
            <section className="controls">
                <button className="back" onClick={onBack}>
                    <span> now &rsaquo;</span>
                </button>
                {/* <button onClick={onNew}>
                    <span> new </span>
                </button> */}
            </section>
            <div className="gap"></div>
            <section className="sessions">
                {$entries}
            </section>
        </article>
    );
}