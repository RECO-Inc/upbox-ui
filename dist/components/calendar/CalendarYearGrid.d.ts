import { HTMLAttributes } from 'vue';
interface Props {
    class?: HTMLAttributes["class"];
    selectedYear?: number;
    startYear?: number;
    yearLength?: number;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    select: (year: number) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onSelect?: ((year: number) => any) | undefined;
}>, {
    startYear: number;
    yearLength: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
