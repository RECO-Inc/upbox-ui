import { RadioGroupItemProps } from 'reka-ui';
interface Props extends RadioGroupItemProps {
    class?: string;
    size?: "small" | "regular" | "large";
    error?: boolean;
    readOnly?: boolean;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    size: "small" | "regular" | "large";
    error: boolean;
    readOnly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLSpanElement>;
export default _default;
