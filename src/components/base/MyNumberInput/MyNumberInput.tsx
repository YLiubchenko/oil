import {MyTextInputProps} from './types';

import {MyTypography} from "../MyTypography";

import './styles.css';

export const MyNumberInput = ({
    placeholder = 'Enter text',
    autoFocus,
    disabled,
    label,
    required,
    errorMessage,
    loading,
    margin,
    defaultValue,
    onChange,
    icon,
    ...props
}: MyTextInputProps) => {

    return (
        <div style={{margin}}>
            {label && (
                <>
                    <MyTypography>
                        {label}
                        {required && ' *'}
                    </MyTypography>
                    {icon}
                </>

            )}
            <div>
                <input
                    defaultValue={defaultValue}
                    autoComplete="off"
                    autoFocus={autoFocus}
                    placeholder={placeholder}
                    disabled={disabled || loading}
                    type="text"
                    min={0}
                    onChange={onChange}
                    {...props}
                    pattern="([0-9]+.{0,1}[0-9]*,{0,1})*[0-9]"
                />
            </div>
            {!disabled && errorMessage && (
                <MyTypography position="absolute">
                    {errorMessage}
                </MyTypography>
            )}
        </div>
    );
}
