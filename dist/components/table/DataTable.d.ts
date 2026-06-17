import { HTMLAttributes } from 'vue';
import { DataTableColumn, DataTableRowKey } from './dataTableTypes';
declare const _default: <Row extends Record<string, any> = Record<string, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:selected"?: ((keys: DataTableRowKey[]) => any) | undefined;
        readonly "onRow-click"?: ((payload: {
            row: Row;
            index: number;
        }) => any) | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>, "onUpdate:selected" | "onRow-click"> & {
        columns: DataTableColumn<Row>[];
        rows: Row[];
        /** 행 고유키: 속성명 또는 (row) => key */
        rowKey: string | ((row: Row) => DataTableRowKey);
        size?: "small" | "regular" | "large";
        loading?: boolean;
        emptyText?: string;
        /** 체크박스 선택 컬럼 노출 (v-model:selected 와 함께 사용) */
        selectable?: boolean;
        /** v-model:selected — 선택된 행 key 배열 */
        selected?: DataTableRowKey[];
        /** 행 클릭/선택 비활성 조건 */
        rowDisabled?: (row: Row) => boolean;
        class?: HTMLAttributes["class"];
    } & Partial<{}>> & import('vue').PublicProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: Partial<Record<`header-${string}`, (_: {
        column: DataTableColumn<Row>;
    }) => any>> & Partial<Record<`cell-${string}`, (_: {
        row: Row;
        value: any;
        index: number;
    }) => any>> & {
        empty?(_: {}): any;
    };
    emit: ((evt: "update:selected", keys: DataTableRowKey[]) => void) & ((evt: "row-click", payload: {
        row: Row;
        index: number;
    }) => void);
}>) => import('vue').VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
