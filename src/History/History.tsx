import React from 'react';
import './History.scss';
import { mockTeaSession, TeaSession } from './TeaSession';

interface HistoryProps {
    sessions: TeaSession[];
    onBack: any;
}

export const mockHistory = {
    sessions: [
        {
            ...mockTeaSession,
            id: '002',
            name: 'Mao Feng',
            color: 'black'
        },
        mockTeaSession,
    ]
}

export const History = ({ sessions, onBack }: HistoryProps) => {
    const $entries = sessions.map(e => <TeaSession key={e.id} session={e} />);
    return (
        <main className="history">
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
        </main>
    );
}