import React from 'react';
import './Controls.scss';

export const Controls = () => {
    return (
        <section className="controls">
            <button>
                <span> old </span>
            </button>
            <button>
                <span> new </span>
            </button>
        </section>
    );
}