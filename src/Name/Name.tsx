import { useRecoilState } from 'recoil';
import { selectedState } from '../App';
import { cls } from '../utils';
import './Name.scss';

interface NameProps {
    name: string,
    setName: any,
}

export const Name = ({ name, setName }: NameProps) => {
    const [selected, setSelected] = useRecoilState(selectedState);
    const start = name === 'Tea';
    const classes = cls([
        'f-cc',
        'name',
        selected === 'name' ? 'selected' : '',
        start ? 'start' : ''
    ]);

    const onClick = () => {
        setSelected('name');
    }

    return (
        <section className={classes}>
            <input
                type="text"
                className="input--text"
                placeholder="Tea"
                value={name}
                onClick={onClick}
                onChange={(e) => {
                    let val = e.currentTarget.value;
                    if (start) {
                        val = val.replace('Tea', '');
                    }
                    setName(val);
                }} />
            <h1 className="name__name">{name}</h1>
        </section>
    );
}