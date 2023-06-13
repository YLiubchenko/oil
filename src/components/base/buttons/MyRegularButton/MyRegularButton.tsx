import { MouseEventHandler, ReactElement } from 'react';


type MyRegularButtonProps = {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
    loading?: boolean;
    disabled?: boolean;
    startIcon?: ReactElement;
};

export const MyRegularButton = ({
    text,
    onClick,
    loading,
    disabled,
    type,
}: MyRegularButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={loading || disabled}
            type={type}
        >
            {text}
        </button>
    );
};