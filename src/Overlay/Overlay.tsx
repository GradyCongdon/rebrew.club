import React from 'react';
import { cls } from '../utils';
import './Overlay.scss';

interface OverlayProps {
    isDone: boolean,
    isOut: boolean,
    setIsOut: any,
    setTime: any,
    lastTime: number
}

export const Overlay = ({ isDone, isOut, setIsOut, setTime, lastTime }: OverlayProps) => {
    const overlayClasses = cls([
        'overlay',
        isDone ? 'done' : '',
        isOut ? 'out' : '',
    ]);
    return (
        <div onClick={() => {
            setIsOut(true);
            setTime(lastTime);
        }} className={overlayClasses}></div>
    );
}