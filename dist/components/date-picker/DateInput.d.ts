import { HTMLAttributes } from 'vue';
import { CalendarDate } from '@internationalized/date';
import { InputFrameVariantProps } from '../input-frame';
type __VLS_Props = {
    size?: InputFrameVariantProps["size"];
    readonly?: boolean;
    disabled?: boolean;
    /** 비어 있을 때(입력 가능할 때)만 표시. 미지정이면 YYYY-MM-DD */
    placeholder?: string;
    class?: HTMLAttributes["class"];
    /**
     * 타이핑 중 8자리 유효 날짜가 완성되면 즉시 모델에 반영한다.
     * 기본(false)은 blur 시점에만 커밋 — 필터처럼 모델 변경이 조회를 유발하는 곳의 기존 동작 유지.
     * 시트/다이얼로그처럼 입력 즉시 유효성·버튼 상태를 갱신해야 할 때만 켠다.
     */
    liveCommit?: boolean;
};
type __VLS_PublicProps = {
    modelValue?: CalendarDate | null;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: CalendarDate | null) => any;
    "update:draftError": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: CalendarDate | null) => any) | undefined;
    "onUpdate:draftError"?: ((value: boolean) => any) | undefined;
}>, {
    disabled: boolean;
    size: "small" | "large" | "regular" | null;
    readonly: boolean;
    liveCommit: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
