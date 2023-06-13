import { ChangeEvent } from 'react';

import {MyTextInputProps} from './types';

import {MyTypography} from "../MyTypography";

export const MyTextInput = ({
    placeholder = 'Enter text',
    autoFocus,
    disabled,
    label,
    required,
    errorMessage,
    loading,
    margin,
    type,
    defaultValue,
    onChange,
    minValue,
    ...props
}: MyTextInputProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e);
    };

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
                    type={type}
                    min={minValue}
                    onChange={onChange ? handleChange : null}
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
