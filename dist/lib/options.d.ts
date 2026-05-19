/**
 * 라이브러리 공통 옵션 계약.
 *
 * `{ label, value }` 기반 옵션 컴포넌트(`SelectField`, `DropdownFilter` 등)의
 * 단일 진실 소스. 컴포넌트별 추가 메타는 이 타입을 `extends` 해서 확장한다.
 */
export interface SelectOption<T = unknown> {
    label: string;
    value: T;
    /** 비활성(선택 불가) 옵션 */
    disabled?: boolean;
}
