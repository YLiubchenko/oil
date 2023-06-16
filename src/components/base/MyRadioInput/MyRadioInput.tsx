import {MyTypography} from "../MyTypography";
import {ChangeEvent} from "react";

interface IProps {
    isChecked: boolean;
    className: string;
    name: string;
    value: string;
    onChange: (arg: ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

export const MyRadioInput = ({isChecked, className, name, value, onChange, label}: IProps) => {
    return (
        <div className={`${className}-wrapper`}>
            <input type="radio" checked={isChecked} className={className} name={name} value={value}
                   onChange={onChange} />
            <MyTypography>{label}</MyTypography>
        </div>
    );
};
