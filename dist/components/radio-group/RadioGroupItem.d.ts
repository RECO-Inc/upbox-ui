import { RadioGroupItemProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
import { VariantProps } from 'class-variance-authority';
declare const radioVariants: (props?: ({
    size?: "small" | "large" | "regular" | null | undefined;
    error?: boolean | null | undefined;
    readOnly?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type RadioVariants = VariantProps<typeof radioVariants>;
interface Props extends RadioGroupItemProps {
    class?: HTMLAttributes["class"];
    size?: RadioVariants["size"];
    error?: boolean;
    readOnly?: boolean;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    size: "small" | "large" | "regular" | null;
    error: boolean;
    readOnly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLSpanElement>;
export default _default;
