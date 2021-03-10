import React from 'react';
import './Controls.scss';

interface ControlsProps {
    onOld: any;
    onNew: any;
}

export const Controls = ({ onNew, onOld }: ControlsProps) => {
    return (
        <section className="controls">
            <button className="old" onClick={onOld}>
                <span> past </span>
            </button>
            <button className="new" onClick={onNew}>
                <span> new </span>
            </button>
        </section>
    );
}