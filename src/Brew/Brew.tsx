import { useRecoilState } from 'recoil';
import { brewNumberState, selectedState } from '../App';
import { cls } from '../utils';
import './Brew.scss';

interface BrewProps {
    // brew: number;
    // selected: string;
    onClick: any;
}

export const Brew = ({ onClick }: BrewProps) => {
    const [brew] = useRecoilState(brewNumberState);
    const [selected] = useRecoilState(selectedState);
    const classes = cls([
        'brew',
        selected === 'brew' ? 'selected' : '',
    ]);
    const number = `number-${brew}`;
    return (
        <section className={classes}>
            <button onClick={onClick}>
                <div className="text">
                    <label>Brew</label>
                    <h2 className={'count ' + number}>{brew}</h2>
                </div>
            </button>
        </section>
    );
}