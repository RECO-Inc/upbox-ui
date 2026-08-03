import { HTMLAttributes } from 'vue';
type __VLS_Props = {
    class?: HTMLAttributes["class"];
    /**
     * 셀 내용을 clampLines 줄에서 말줄임하고, 실제로 잘렸을 때만 전문 보기 아이콘을 노출한다.
     * 아이콘에 hover 하면 잘리지 않은 전체 텍스트가 툴팁으로 뜬다.
     */
    truncate?: boolean;
    /** truncate 시 노출할 최대 줄 수 */
    clampLines?: number;
    /**
     * 셀 내용 정렬 (default: left).
     * 내부 flex 컨테이너를 justify 하므로 text-align 보다 안전하다. TableHead 의 align 과 대응한다.
     */
    align?: "left" | "center" | "right";
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        default?: () => any;
        /** 전문 보기 아이콘 교체용. 미지정 시 lucide TextAlignStart */
        "tooltip-icon"?: () => any;
    }> & {
        default?: () => any;
        /** 전문 보기 아이콘 교체용. 미지정 시 lucide TextAlignStart */
        "tooltip-icon"?: () => any;
    };
    refs: {
        textRef: HTMLDivElement;
    };
    rootEl: HTMLTableCellElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    truncate: boolean;
    clampLines: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    textRef: HTMLDivElement;
}, HTMLTableCellElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
