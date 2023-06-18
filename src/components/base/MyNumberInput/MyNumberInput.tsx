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
    ...props
}: MyTextInputProps) => {

    return (
        <div style={{margin}}>
            {label && (
                <MyTypography>
                    {label}
                    {required && ' *'}
                </MyTypography>
            )}
            <div>
                <input
                    defaultValue={defaultValue}
                    autoComplete="off"
                    autoFocus={autoFocus}
                    placeholder={placeholder}
                    disabled={disabled || loading}
                    type="number"
                    min={0}
                    onChange={onChange}
                    {...props}
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
