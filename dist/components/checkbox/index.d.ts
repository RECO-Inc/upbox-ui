export { default as Checkbox } from './Checkbox';
export interface CheckboxProps {
    size?: "small" | "regular" | "large";
    error?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    class?: string;
}
