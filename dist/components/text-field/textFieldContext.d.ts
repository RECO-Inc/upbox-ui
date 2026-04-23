import { ComputedRef, InjectionKey } from 'vue';
/** `TextField` 내부 `TextFieldCount`·`TextFieldUnit` 등이 값·제한을 맞출 때 사용 */
export interface TextFieldTrailingContext {
    currentCount: ComputedRef<number>;
    maxLength: ComputedRef<number | undefined>;
    byteMode: ComputedRef<boolean>;
}
export declare const TEXT_FIELD_TRAILING_CONTEXT_KEY: InjectionKey<TextFieldTrailingContext>;
