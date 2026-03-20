import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Tabs } from "./Tabs.vue"
export { default as TabsContent } from "./TabsContent.vue"
export { default as TabsList } from "./TabsList.vue"
export { default as TabsTrigger } from "./TabsTrigger.vue"

export const tabsListVariants = cva(
  "relative inline-flex items-center",
  {
    variants: {
      variant: {
        default: "items-end gap-[24px]",
        round: "items-end gap-[8px]",
        box: "rounded p-[4px]",
      },
      color: {
        navy: "",
        grey: "",
      },
      size: {
        small: "",
        regular: "",
        large: "",
        xlarge: "",
      },
    },
    compoundVariants: [
      // box + color
      {
        variant: "box",
        color: "navy",
        class: "bg-navy-80",
      },
      {
        variant: "box",
        color: "grey",
        class: "bg-grey-30",
      },
      // box + xlarge
      {
        variant: "box",
        size: "xlarge",
        class: "rounded-lg",
      },
    ],
    defaultVariants: {
      variant: "default",
      color: "navy",
      size: "regular",
    },
  },
)

export const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      variant: {
        default: "py-[8px] font-bold text-grey-50 border-b-2 border-transparent data-[state=active]:text-navy-80 data-[state=active]:border-navy-80",
        round: "px-[8px] font-normal text-grey-60 border border-grey-40 bg-grey-10 rounded-full data-[state=active]:text-blue-90 data-[state=active]:border-blue-90 data-[state=active]:font-bold",
        box: "font-bold rounded-sm transition-[background-color] duration-500 data-[state=active]:bg-grey-10",
      },
      color: {
        navy: "",
        grey: "",
      },
      size: {
        small: "",
        regular: "",
        large: "",
        xlarge: "",
      },
    },
    compoundVariants: [
      // default variant sizes
      {
        variant: "default",
        size: "regular",
        class: "h-[40px] text-size-16",
      },
      {
        variant: "default",
        size: "small",
        class: "h-[32px] text-size-14",
      },
      // round variant sizes
      {
        variant: "round",
        size: "regular",
        class: "py-[8px] text-size-14",
      },
      {
        variant: "round",
        size: "small",
        class: "py-[6px] text-size-14",
      },
      // box + color
      {
        variant: "box",
        color: "navy",
        class: "text-grey-10 data-[state=active]:text-navy-90",
      },
      {
        variant: "box",
        color: "grey",
        class: "text-grey-60 data-[state=active]:text-grey-80",
      },
      // box sizes
      {
        variant: "box",
        size: "small",
        class: "px-[12px] h-[24px] text-size-12",
      },
      {
        variant: "box",
        size: "regular",
        class: "px-[14px] h-[32px] text-size-14",
      },
      {
        variant: "box",
        size: "large",
        class: "px-[16px] h-[40px] text-size-15",
      },
      {
        variant: "box",
        size: "xlarge",
        class: "px-[16px] h-[48px] text-size-16",
      },
    ],
    defaultVariants: {
      variant: "default",
      color: "navy",
      size: "regular",
    },
  },
)

export type TabsListVariants = VariantProps<typeof tabsListVariants>
export type TabsTriggerVariants = VariantProps<typeof tabsTriggerVariants>
