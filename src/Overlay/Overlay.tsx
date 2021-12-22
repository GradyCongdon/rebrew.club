import { cls } from '../utils';
import './Overlay.scss';

interface OverlayProps {
    isDone: boolean,
    isOut: boolean,
    clearOverlay: any
}

export const Overlay = ({ isDone, isOut, clearOverlay }: OverlayProps) => {
    const overlayClasses = cls([
        'overlay',
        isDone ? 'done' : '',
        isOut ? 'out' : '',
    ]);
    return (
        <div onClick={clearOverlay} className={overlayClasses}></div>
    );
}