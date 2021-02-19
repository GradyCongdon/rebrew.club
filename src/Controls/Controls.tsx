import React from 'react';
import './Controls.scss';

interface ControlsProps {
    onNew: any;
}

export const Controls = ({ onNew }: ControlsProps) => {
    return (
        <section className="controls">
            <button>
                <span> old </span>
            </button>
            <button onClick={onNew}>
                <span> new </span>
            </button>
        </section>
    );
}