interface IProps {
    setValue: (arg: number) => string;
}

const measurement = [1, 2, 3, 4, 5];

export const Values = ({setValue}: IProps) => {
    return (
        <div className="values">
            {measurement.map(item => <span key={item} className="value-item">{setValue(item)}</span>)}
        </div>

    );
};