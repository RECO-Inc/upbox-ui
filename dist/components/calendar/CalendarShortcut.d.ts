import { HTMLAttributes } from 'vue';
import { DateValue } from '@internationalized/date';
import { CalendarShortcutItem } from './calendarShortcutItems';
type __VLS_Props = {
    class?: HTMLAttributes["class"];
    /** 노출할 단축 목록. 정책상 일부만 필요하면 골라서 넘긴다. */
    items?: CalendarShortcutItem[];
    /** 선택 가능한 최소 날짜(포함). 범위 밖 단축은 비활성. */
    minValue?: DateValue | null;
    /** 선택 가능한 최대 날짜(포함). 범위 밖 단축은 비활성. */
    maxValue?: DateValue | null;
};
declare function emitShortcut(months: number): void;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            items: {
                disabled: boolean;
                label: string;
                months: number;
            }[];
            select: typeof emitShortcut;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    shortcutSelect: (months: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onShortcutSelect?: ((months: number) => any) | undefined;
}>, {
    items: CalendarShortcutItem[];
    minValue: DateValue | null;
    maxValue: DateValue | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
