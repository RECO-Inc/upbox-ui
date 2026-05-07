import { HTMLAttributes } from 'vue';
type __VLS_Props = {
    /**
     * 부모 `TextField` 밖에서 쓸 때만. `TextField` 자식이면 `TextField`의 model·`maxLength`·`byteMode`가 우선
     */
    current?: number;
    maxLength?: number;
    byteMode?: boolean;
    class?: HTMLAttributes["class"];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLSpanElement>;
export default _default;
