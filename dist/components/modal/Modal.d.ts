import { ModalProps } from './modalProps';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        /** 모달 바디 */
        default?: () => unknown;
        /** 헤더 영역 전체 override (title/description 대신) */
        header?: () => unknown;
        /** footer 영역 전체 override. close/confirm/cancel 헬퍼 제공 */
        footer?: (props: {
            close: () => void;
            confirm: () => void;
            cancel: () => void;
        }) => unknown;
    }> & {
        /** 모달 바디 */
        default?: () => unknown;
        /** 헤더 영역 전체 override (title/description 대신) */
        header?: () => unknown;
        /** footer 영역 전체 override. close/confirm/cancel 헬퍼 제공 */
        footer?: (props: {
            close: () => void;
            confirm: () => void;
            cancel: () => void;
        }) => unknown;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ModalProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:open": (value: boolean) => any;
    confirm: () => any;
    cancel: () => any;
}, string, import('vue').PublicProps, Readonly<ModalProps> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    onConfirm?: (() => any) | undefined;
    onCancel?: (() => any) | undefined;
}>, {
    size: import('../dialog').DialogSize;
    destructive: boolean;
    showClose: boolean;
    closeOnOverlay: boolean;
    closeOnEscape: boolean;
    confirmText: string;
    cancelText: string;
    confirmLoading: boolean;
    confirmDisabled: boolean;
    hideCancel: boolean;
    hideConfirm: boolean;
    footerButtonGrow: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
