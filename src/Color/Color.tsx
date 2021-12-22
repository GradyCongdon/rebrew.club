import { useRecoilState } from 'recoil';
import { colorState, selectedState } from '../App';
import { cls } from '../utils';
import './Color.scss'

interface ColorProps {
    color: string
    setColor: any
    selected: string
    setSelected: any
}

const colorClass = (name: string, color: string) => cls([
    'f-cc',
    name,
    name === color ? 'active' : ''
]);



export const Color = () => {
    const [color, _setColor] = useRecoilState(colorState);
    const [_, setSelected] = useRecoilState(selectedState);
    const classes = cls([
        'color',
        //selected === 'color' ? 'selected' : '',
    ]);
    const setColor = (color: string) => {
        setSelected('color');
        _setColor(color);
    }
    return (
        <section className={classes} >
            <button className={colorClass('pu-erh', color)} onClick={() => setColor('pu-erh')} >
                <span className="text">
                    Pu-erh
                </span>
            </button>
            <button className={colorClass('black', color)} onClick={() => setColor('black')} >
                <span className="text">
                    Black
                </span>
            </button>
            <button className={colorClass('oolong', color)} onClick={() => setColor('oolong')}>
                <span className="text">
                    <span className="olong">
                        {/* <span className="big-O">
                            O
                        <span className="o">o</span>
                        </span>
                        long */}
                        <span className="oo">Oo</span>long
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

