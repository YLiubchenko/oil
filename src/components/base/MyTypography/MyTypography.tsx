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

    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
};

export const MyTypography = ({ children, ...other }: MyTypographyProps) => {

    return (
        <label
            {...other}
        >
            {children}
        </label>
    );
};