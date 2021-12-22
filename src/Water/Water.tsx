import { selector, useRecoilState, useRecoilValue } from 'recoil';
import { selectedState, waterState, waterUnitState } from '../App';
import { cls, parseAmountInput, scrollInput } from '../utils';
import './Water.scss';

interface WaterProps {
    water: number
    setWater: any
    isMass: boolean
    setIsMass: any
    selected: string
    setSelected: any
}

const isMassState = selector({
    key: 'waterUnit',
    get: ({ get }) => {
        const unit = get(waterUnitState);
        return unit === 'g';
    }
})

export const Water = () => {
    const [water, setWater] = useRecoilState(waterState);
    const [selected, setSelected] = useRecoilState(selectedState);
    const [_, setWaterUnit] = useRecoilState(waterUnitState);
    const isMass = useRecoilValue(isMassState);

    const ozClasses = cls([
        'amount-label',
        'oz',
        isMass ? '' : 'active',
    ]);
    const gClasses = cls([
        'amount-label',
        'g',
        isMass ? 'active' : '',
    ]);
    const classes = cls([
        'water',
        selected === 'water' ? 'selected' : ''
    ])

    const onClick = (e: any) => {
        scrollInput(e);
        setSelected('water');
    }
    return (
        <section className={classes} >
            <input
                type="tel"
                className="input--water glass"
                value={water}
                onClick={onClick}
                onChange={(e) => setWater(parseAmountInput(999, e))} />
            <div className="value">
                <div className="glass">
                    <h2 className="amount">{water}</h2>
                </div>
            </div>
            <div className="label">
                <button className={ozClasses} onClick={() => setWaterUnit('oz')}>oz</button>
                <button className={gClasses} onClick={() => setWaterUnit('g')}>ml</button>
            </div>
        </section>
    );
}