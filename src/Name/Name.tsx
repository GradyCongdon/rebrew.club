import React from 'react';
import './Name.scss';

interface NameProps {
    name: string,
    setName: any,
}

export const Name = ({ name, setName }: NameProps) => {
    return (
        <section className="f-cc name">
            <input type="text" className="input--text" onChange={(e) => setName(e.currentTarget.value)} />
            <h1 className="name__name">{name}</h1>
        </section>
    );
}