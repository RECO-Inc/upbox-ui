import { RangeCalendarHeaderProps } from 'reka-ui';
import { CalendarDate } from '@internationalized/date';
import { HTMLAttributes } from 'vue';
type __VLS_Props = RangeCalendarHeaderProps & {
    class?: HTMLAttributes["class"];
    placeholder: CalendarDate;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    clickHeading: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClickHeading?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
