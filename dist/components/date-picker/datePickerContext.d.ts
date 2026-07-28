import { InjectionKey, Ref } from 'vue';
import { CalendarDate, DateValue } from '@internationalized/date';
export interface DatePickerContext {
    model: Ref<CalendarDate | null | undefined>;
    draftError: Ref<boolean>;
    /**
     * 선택 가능 범위(포함). 캘린더 셀 비활성뿐 아니라 `DateInput` 의 타이핑 커밋도 이 범위로 막는다.
     * (범위를 캘린더에만 넘기면 키보드 입력 경로로 제약이 우회된다 — UP20-8581)
     * 미지정이면 해당 방향 제한 없음.
     */
    minValue?: Ref<DateValue | null | undefined>;
    maxValue?: Ref<DateValue | null | undefined>;
}
export declare const DATE_PICKER_CTX_KEY: InjectionKey<DatePickerContext>;
