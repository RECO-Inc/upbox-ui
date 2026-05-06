import { InjectionKey, Ref } from 'vue';
import { Time } from '@internationalized/date';
export interface TimePickerContext {
    model: Ref<Time | null | undefined>;
    draftError: Ref<boolean>;
}
export declare const TIME_PICKER_CTX_KEY: InjectionKey<TimePickerContext>;
