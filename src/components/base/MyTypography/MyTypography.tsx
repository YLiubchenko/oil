import { ReactNode } from 'react';

type MyTypographyProps = {
    children: ReactNode;

    noWrap?: boolean;
    zIndex?: number;

    maxWidth?: number | string;
    minWidth?: number | string;
    width?: number | string;

    position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
    label?: string;

    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
};

export const MyTypography = ({children, label, ...other}: MyTypographyProps) => {

    return (
        <label
            htmlFor={label}
            {...other}
        >
            {children}
        </label>
    );
};