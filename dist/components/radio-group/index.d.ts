export { default as RadioGroup } from './RadioGroup';
export { default as RadioGroupItem } from './RadioGroupItem';
export interface RadioGroupItemProps {
    size?: "small" | "regular" | "large";
    error?: boolean;
    readOnly?: boolean;
    class?: string;
}
