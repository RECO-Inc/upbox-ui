import { ComputedRef, InjectionKey } from 'vue';
/** `Textarea` 내부 `TextareaCount` 등이 값·제한을 맞출 때 사용 */
export interface TextareaTrailingContext {
    currentCount: ComputedRef<number>;
    maxLength: ComputedRef<number | undefined>;
    byteMode: ComputedRef<boolean>;
}
export declare const TEXTAREA_TRAILING_CONTEXT_KEY: InjectionKey<TextareaTrailingContext>;
