import { HTMLAttributes } from 'vue';
interface Props {
    class?: HTMLAttributes["class"];
    year: number;
    /** 해당 `year`와 동일한 연도 선택일 때만 강조할 월(1–12) */
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
