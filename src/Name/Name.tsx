import React, { useState } from 'react';
import { cls } from '../utils';
import './Name.scss';

interface NameProps {
    name: string,
    setName: any,
    selected: string
    setSelected: any
}

export const Name = ({ name, setName, selected, setSelected }: NameProps) => {
    const [start, setStart] = useState(true);
    const classes = cls([
        'f-cc',
        'name',
        selected === 'name' ? 'selected' : '',
        start ? 'start' : ''
    ]);

    return (
        <section className={classes}>
            <input
                type="text"
                className="input--text"
                onClick={() => setSelected('name')}
                onChange={(e) => {
                    setStart(false);
                    setName(e.currentTarget.value)
                }} />
            <h1 className="name__name">{name}</h1>
        </section>
    );
}