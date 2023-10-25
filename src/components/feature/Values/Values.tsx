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
    const measurement = useSelector(measurementSelector) as string;

    return (
        <div className="values">
            {    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                (measurements[measurement as keyof string] as number[]).map((item: number) => <span key={item} className="value-item">{setValue(item)}</span>)}

        </div>

    );
};