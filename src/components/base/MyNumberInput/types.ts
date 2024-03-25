import {ChangeEvent, ReactNode} from 'react';

export type MyTextInputProps = {
    value?: string | number;
    /**
     *  @default false
     */
    required?: boolean;
    /**
     *  @default 'text'
     */
    type?: 'text' | 'number' | 'password';
    /**
     *  @default 'text'
     */
    alignInputText?: 'left' | 'right';
    /**
     * set the text and placeholder align in input
     *  @default 'left'
     */
    loading?: boolean;
    /**
     *  @default 'Enter text'
     */
    placeholder?: string;
    /**
     *  @default false
     */
    disabled?: boolean;
    autoFocus?: boolean;

    name?: string;
    label?: ReactNode;
    icon?: ReactNode;
    /**
     *  allow changing label and info icon position
     *  @default 'top-left'
     */
    labelPosition?: 'left' | 'top-left';

    /**
     *  for "type=number" we can set number of decimal places (decimalPlaces >= 0)
     */
    decimalPlaces?: number;
    errorMessage?: string;
    /**
     *  if true - red border will be added and Label will be colored to red
     *  @default false
     */
    error?: boolean;

    /**
     * Start InputAdornment for this component.
     * as Adornment can be any ReactNode
     */
    startAdornment?: ReactNode;
    /**
     * End InputAdornment for this component.
     * as Adornment can be any ReactNode
     */
    endAdornment?: ReactNode;

    testId?: string;

    /**
     *  will add info icon as input info content
     *  @default false
     */
    infoIcon?: boolean;
    /**
     *  will add custom content as input info content
     */
    info?: ReactNode;
    /**
     *  will add tooltip to info content
     */
    tooltip?: ReactNode;

    /**
     * If true, a TextareaAutosize element is rendered.
     *  @default false
     */
    multiline?: boolean;
    /**
     * Number of rows to display when multiline option is set to true.
     */
    rows?: number | string;
    /**
     * Number of rows to display when multiline option is set to true.
     */
    maxRows?: number | string;
    /**
     * Minimum number of rows to display when multiline option is set to true.
     */
    minRows?: number | string;
    /**
     * Allow you to set MHTextInput container margin (example -> margin="0 10px 0 0")
     */
    margin?: string;

    defaultValue?: string;
    onChange: (arg: ChangeEvent<HTMLInputElement>) => void;
};