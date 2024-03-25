import { MyTypography } from "../MyTypography";
import { ChangeEvent } from "react";

import './styles.css';

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
            <input type="radio" id={label} checked={isChecked} className={className} name={name} value={value}
                   onChange={onChange} />
            <MyTypography label={label}>{label}</MyTypography>
        </div>
    );
};
