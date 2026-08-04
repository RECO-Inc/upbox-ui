import { DialogContentProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
export type DialogSize = "xsmall" | "small" | "regular" | "large" | "xlarge" | "full";
type __VLS_Props = DialogContentProps & {
    class?: HTMLAttributes["class"];
    size?: DialogSize;
    /** 우상단 닫기(X) 버튼 숨김 (default: false) */
    hideClose?: boolean;
    /**
     * 뷰포트를 꽉 채우는 전체화면 모드. `size` 는 무시된다.
     *
     * 소비 앱이 `@import "tailwindcss" important` 인 경우 DS dist 를 `@source` 로
     * 스캔하면서 여기서 쓰는 `left-1/2`/`top-1/2` 까지 `!important` 가 된다.
     * 그래서 앱이 바깥에서 `inset-0` 같은 유틸로 덮으려 하면 둘 다 important 라
     * Tailwind 내부 정렬 순서에 승패가 좌우된다(= 불안정).
     * 전체화면을 컴포넌트가 소유해서 애초에 `left-1/2`/`top-1/2` 를 방출하지 않는다.
     */
    fullscreen?: boolean;
    /**
     * 오버레이(dim)에 얹을 클래스. 비모달 패널처럼 dim 을 투명하게 하거나
     * 클릭을 통과시켜야 할 때 쓴다 (`bg-transparent pointer-events-none`).
     * 오버레이는 포털 내부라 소비자가 바깥에서 잡을 수 없어 prop 으로 연다.
     */
    overlayClass?: HTMLAttributes["class"];
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: import('reka-ui').PointerDownOutsideEvent) => any;
    focusOutside: (event: import('reka-ui').FocusOutsideEvent) => any;
    interactOutside: (event: import('reka-ui').PointerDownOutsideEvent | import('reka-ui').FocusOutsideEvent) => any;
    openAutoFocus: (event: Event) => any;
    closeAutoFocus: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: import('reka-ui').PointerDownOutsideEvent) => any) | undefined;
    onFocusOutside?: ((event: import('reka-ui').FocusOutsideEvent) => any) | undefined;
    onInteractOutside?: ((event: import('reka-ui').PointerDownOutsideEvent | import('reka-ui').FocusOutsideEvent) => any) | undefined;
    onOpenAutoFocus?: ((event: Event) => any) | undefined;
    onCloseAutoFocus?: ((event: Event) => any) | undefined;
}>, {
    size: DialogSize;
    hideClose: boolean;
    fullscreen: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
