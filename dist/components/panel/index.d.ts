import { VariantProps } from 'class-variance-authority';
export { default as Panel } from './Panel';
export declare const panelVariants: (props?: ({
    variant?: "negative" | "positive" | "informative" | "warning" | null | undefined;
    size?: "small" | "large" | "medium" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export declare const panelIconVariants: (props?: ({
    variant?: "negative" | "positive" | "informative" | "warning" | null | undefined;
    size?: "small" | "large" | "medium" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export declare const panelTextVariants: (props?: ({
    size?: "small" | "large" | "medium" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type PanelVariants = VariantProps<typeof panelVariants>;
export interface PanelProps {
    /** 상태 색상 (Figma state) — fail→negative / warning / processing→informative / success→positive */
    variant?: "negative" | "warning" | "informative" | "positive";
    size?: "small" | "medium" | "large";
    /** 상태 아이콘 노출 여부 (기본 true) */
    icon?: boolean;
    class?: string;
}
