import { useRecoilState } from 'recoil';
import { selectedState, temperatureState, temperatureUnitState } from '../App';
import { cls, parseAmountInput, scrollInput } from '../utils';
import './Temperature.scss';

export const Temperature = () => {
    const [temperature, setTemperature] = useRecoilState(temperatureState);
    const [temperatureUnit, setTemperatureUnit] = useRecoilState(temperatureUnitState);
    const [selected, setSelected] = useRecoilState(selectedState);

    const fClasses = cls([
        'amount-label',
        'fahrenheit',
        temperatureUnit === 'F' ? 'active' : '',
    ]);
    const cClasses = cls([
        'amount-label',
        'celsius',
        temperatureUnit === 'C' ? 'active' : '',
    ]);
    const classes = cls([
        'temperature',
        selected === 'temperature' ? 'selected' : '',
    ]);

    const onClick = (e: any) => {
        scrollInput(e);
        setSelected('temperature');
    }
    return (
        <section className={classes} >
            <input
                type="tel"
                className="input--temperature"
                value={temperature}
                onClick={onClick}
                onChange={(e) => setTemperature(parseAmountInput(212, e))} />
            <div className="value">
                <div className="circle">
                    <h2 className="amount">{temperature}</h2>
                </div>
            </div>
            <div className="label">
                <button className={fClasses} onClick={() => setTemperatureUnit("F")}>°F</button>
                <button className={cClasses} onClick={() => setTemperatureUnit('C')}>°C</button>
            </div>
        </section>
    );
}