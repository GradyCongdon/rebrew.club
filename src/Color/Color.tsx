import React from 'react';
import './Color.scss'

interface ColorProps {
    color: string,
    setColor: any,
}


export const Color = ({ color, setColor }: ColorProps) => {
    return (
        <section className="color">
            <button className="f-cc black">
                <span className="text">
                    Black
          </span>
            </button>
            <button className="f-cc oolong">
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
            <button className="f-cc green">
                <span className="text">
                    Green
          </span>
            </button>
            <button className="f-cc white">
                <span className="text">
                    White
          </span>
            </button>
        </section>
    );
}

