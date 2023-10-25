import {ReactNode} from "react";

interface IProps {
    icon: ReactNode;
    onClick: () => void;
    className: string;
    placeholder?: string;
}
export const MyIconButton = ({icon, onClick, className}: IProps) => {
    return (
            <button
                onClick={onClick}
                className={className}
            >
                {icon}
            </button>
    );
};

