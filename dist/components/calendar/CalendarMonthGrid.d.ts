import { HTMLAttributes } from 'vue';
interface Props {
    class?: HTMLAttributes["class"];
    year: number;
    selectedMonth?: number;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    select: (month: number) => any;
    prevYear: () => any;
    nextYear: () => any;
    clickYear: () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onSelect?: ((month: number) => any) | undefined;
    onPrevYear?: (() => any) | undefined;
    onNextYear?: (() => any) | undefined;
    onClickYear?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
