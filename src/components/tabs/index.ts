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
        default: "items-end gap-6",
        round: "items-end gap-2",
        box: "rounded p-1",
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
        class: "bg-primary-80",
      },
      {
        variant: "box",
        color: "grey",
        class: "bg-base-30",
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
  "inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      variant: {
        default: "py-2 font-bold text-base-50 border-b-2 border-transparent data-[state=active]:text-primary-80 data-[state=active]:border-primary-80",
        round: "px-2 font-normal text-base-60 border border-base-40 bg-base-10 rounded-full data-[state=active]:text-info-90 data-[state=active]:border-info-90 data-[state=active]:font-bold",
        box: "font-bold rounded transition-[background-color] duration-500 data-[state=active]:bg-base-10",
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
        class: "h-10 text-size-16",
      },
      {
        variant: "default",
        size: "small",
        class: "h-8 text-size-14",
      },
      // round variant sizes
      {
        variant: "round",
        size: "regular",
        class: "py-2 text-size-14",
      },
      {
        variant: "round",
        size: "small",
        class: "py-1.5 text-size-14",
      },
      // box + color
      {
        variant: "box",
        color: "navy",
        class: "text-base-10 data-[state=active]:text-primary-90",
      },
      {
        variant: "box",
        color: "grey",
        class: "text-base-60 data-[state=active]:text-base-80",
      },
      // box sizes
      {
        variant: "box",
        size: "small",
        class: "px-3 h-6 text-size-12",
      },
      {
        variant: "box",
        size: "regular",
        class: "px-3.5 h-8 text-size-14",
      },
      {
        variant: "box",
        size: "large",
        class: "px-4 h-10 text-size-15",
      },
      {
        variant: "box",
        size: "xlarge",
        class: "px-4 h-12 text-size-16",
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
