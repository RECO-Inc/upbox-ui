import { InjectionKey, Ref } from 'vue';
import { CalendarDate } from '@internationalized/date';
export interface DatePickerContext {
    model: Ref<CalendarDate | null | undefined>;
    draftError: Ref<boolean>;
}
export declare const DATE_PICKER_CTX_KEY: InjectionKey<DatePickerContext>;
