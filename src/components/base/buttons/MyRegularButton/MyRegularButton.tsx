import { MouseEventHandler, ReactElement } from 'react';


type MyRegularButtonProps = {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
    loading?: boolean;
    disabled?: boolean;
    startIcon?: ReactElement;
    className?: string;
};

export const MyRegularButton = ({
    text,
    onClick,
    loading,
    disabled,
    type,
    className
}: MyRegularButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={loading || disabled}
            type={type}
            className={className}
        >
            {text}
        </button>
    );
};