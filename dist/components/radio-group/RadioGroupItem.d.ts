import { RadioGroupItemProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
import { VariantProps } from 'class-variance-authority';
declare const radioVariants: (props?: ({
    size?: "small" | "regular" | "large" | null | undefined;
    error?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
type RadioVariants = VariantProps<typeof radioVariants>;
interface Props extends RadioGroupItemProps {
    class?: HTMLAttributes["class"];
    size?: RadioVariants["size"];
    error?: boolean;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    error: boolean;
    size: "small" | "regular" | "large" | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
