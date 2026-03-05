import { HTMLAttributes } from 'vue';
interface Props {
    class?: HTMLAttributes["class"];
    showSeconds?: boolean;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    'hour': number;
    'minute': number;
    'second'?: number;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:hour": (value: number) => any;
    "update:minute": (value: number) => any;
    "update:second": (value: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:hour"?: ((value: number) => any) | undefined;
    "onUpdate:minute"?: ((value: number) => any) | undefined;
    "onUpdate:second"?: ((value: number) => any) | undefined;
}>, {
    showSeconds: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    hourScroller: HTMLDivElement;
    minuteScroller: HTMLDivElement;
    secondScroller: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
