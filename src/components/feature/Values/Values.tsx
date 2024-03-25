import {useSelector} from "react-redux";
import {measurementSelector} from "../../../store/selectors.ts";

interface IProps {
    setValue: (arg: number) => string;
}

type MeasurementType =  'л'| 'кг'| 'шт';

const measurements = {
    'л': [1, 3, 5],
    'кг': [0.5, 1, 2, 3, 5],
    'шт': [1, 2, 3],
};

export const Values = ({setValue}: IProps) => {
    const measurement = useSelector(measurementSelector);

    return (
        <div className="values">
            {measurements[measurement as MeasurementType].map(item => <span key={item} className="value-item">{setValue(item)}</span>)}
        </div>

    );
};