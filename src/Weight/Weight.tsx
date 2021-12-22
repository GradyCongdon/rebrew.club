import { useRecoilState } from 'recoil';
import { weightState, weightUnitState, selectedState } from '../App';
import { cls, parseAmountInput, scrollInput } from '../utils';
import './Weight.scss';

interface WeightProps {
    weight: number;
    setWeight: any;
    isMass: boolean;
    setIsMass: any;
    selected: string;
    setSelected: any;
}

export const Weight = () => {
    const [weight, setWeight] = useRecoilState(weightState);
    const [weightUnit, setWeightUnit] = useRecoilState(weightUnitState);
    const [selected, setSelected] = useRecoilState(selectedState);


    const tspClasses = cls([
        'amount-label',
        'tsp',
        weightUnit === 'tsp' ? 'active' : '',
    ]);
    const gClasses = cls([
        'amount-label',
        'g',
        weightUnit === 'g' ? 'active' : '',
    ]);

    const classes = cls([
        'weight',
        selected === 'weight' ? 'selected' : ''
    ]);

    const onClick = (e: any) => {
        scrollInput(e);
        setSelected('weight');
    }

    return (
        <section className={classes} >
            <input
                type="tel"
                className="input--weight"
                value={weight}
                onClick={onClick}
                onChange={(e) => setWeight(parseAmountInput(33, e))} />
            <div className="diamond">
                <button className={tspClasses} onClick={() => setWeightUnit('tsp')}>tsp</button>
                <h2 className="value">{weight}</h2>
                <button className={gClasses} onClick={() => setWeightUnit('g')}>g</button>
            </div>
        </section>
    );
}