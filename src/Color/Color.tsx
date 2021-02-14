import React from 'react';
import './Color.scss'

export const Color = () => {
    return (
        <section className="color">
            <div className="f-cc black">
                <span className="text">
                    Black
          </span>
            </div>
            <div className="f-cc oolong">
                <span className="text">
                    <span className="olong">
                        Olong
            <span className="o">o</span>
                    </span>
                </span>
            </div>
            <div className="f-cc green">
                <span className="text">
                    Green
          </span>
            </div>
            <div className="f-cc white">
                <span className="text">
                    White
          </span>
            </div>
        </section>
    );
}

