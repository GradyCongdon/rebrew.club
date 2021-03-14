import React from 'react';
import './History.scss';
import { mockTeaSession, TeaSession } from '../Sessions/TeaSession';
import { clearSessions, getSessions } from '../Sessions';

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
    const $entries = sessions.sort((a, b) => b.id - a.id).map(e => <TeaSession key={e.id} session={e} />);
    const confirmClear = () => {
        const clear = window.confirm('really?');
        if (clear) {
            clearSessions();
            onBack()
        }
    }
    return (
        <article className="history">
            <section className="controls">
                <button className="back" onClick={onBack}>
                    <span> now </span>
                </button>
                <button onClick={confirmClear}>
                    <span> clear </span>
                </button>
            </section>
            <div className="gap"></div>
            <section className="sessions">
                {$entries}
            </section>
        </article>
    );
}