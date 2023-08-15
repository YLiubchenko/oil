import {ChangeEvent} from 'react';
import {MyNumberInput} from "../../base/MyNumberInput";
import {Values} from "../Values";
import {MyIconButton} from "../../base/buttons/MyIconButton/MyIconButton.tsx";
import {Discount} from "../../../assets/icons/Discount.tsx";

interface IProps {
    value: number;
    onChange: (arg1: ChangeEvent<HTMLInputElement>, arg2: string ) => void;
    label: string;
    valueKey: string;
    setValue: (arg: number) => string;
}
export const ValueList = ({value, onChange,label, valueKey, setValue }: IProps) => {
    return (
        <div>
            <MyNumberInput value={value || ''} onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e, valueKey)}
                           label={label} icon={<MyIconButton className='trash' onClick={() => console.log('ddd')} icon={<Discount />} placeholder={label}/>} />

            <Values setValue={setValue}/>
        </div>

    );
};

