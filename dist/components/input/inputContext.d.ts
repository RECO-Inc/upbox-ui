import { ComputedRef, InjectionKey } from 'vue';
/** `Input` 내부 `InputCount`·`InputUnit` 등이 값·제한을 맞출 때 사용 */
export interface InputTrailingContext {
    currentCount: ComputedRef<number>;
    maxLength: ComputedRef<number | undefined>;
    byteMode: ComputedRef<boolean>;
}
export declare const INPUT_TRAILING_CONTEXT_KEY: InjectionKey<InputTrailingContext>;
