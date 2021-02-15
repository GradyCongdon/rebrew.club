import React from 'react';
import { cls } from '../utils';
import './Color.scss'

interface ColorProps {
    color: string,
    setColor: any,
}

const colorClass = (name: string, color: string) => cls([
    'f-cc',
    name,
    name === color ? 'active' : ''
]);


export const Color = ({ color, setColor }: ColorProps) => {
    return (
        <section className="color bg">
            <button className={colorClass('black', color)} onClick={() => setColor('black')} >
                <span className="text">
                    Black
          </span>
            </button>
            <button className={colorClass('oolong', color)} onClick={() => setColor('oolong')}>
                <span className="text">
                    <span className="olong">
                        <span className="big-O">
                            O
                        <span className="o">o</span>
                        </span>
                        long
                    </span>
                </span>
            </button>
            <button className={colorClass('green', color)} onClick={() => setColor('green')}>
                <span className="text">
                    Green
          </span>
            </button>
            <button className={colorClass('white', color)} onClick={() => setColor('white')}>
                <span className="text">
                    White
                </span>
            </button>
        </section>
    );
}

