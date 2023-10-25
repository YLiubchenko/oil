import {useSelector} from "react-redux";
import {measurementSelector} from "../../../store/selectors.ts";

interface IProps {
    setValue: (arg: number) => string;
}

const measurements = {
    'л': [1, 3, 5],
    'г': [100, 500, 1000],
    'шт': [1, 2, 3],
};

export const Values = ({setValue}: IProps) => {
    const measurement = useSelector(measurementSelector);

    return (
        <div className="values">
            {measurements[measurement].map(item => <span key={item} className="value-item">{setValue(item)}</span>)}
        </div>

    );
};