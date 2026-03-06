import type { VariantProps } from "class-variance-authority"
import type { HTMLAttributes } from "vue"
import type { ButtonVariants } from '../button'
import { cva } from "class-variance-authority"

export { default as InputGroup } from "./InputGroup.vue"
export { default as InputGroupAddon } from "./InputGroupAddon.vue"
export { default as InputGroupButton } from "./InputGroupButton.vue"
export { default as InputGroupInput } from "./InputGroupInput.vue"
export { default as InputGroupText } from "./InputGroupText.vue"
export { default as InputGroupTextarea } from "./InputGroupTextarea.vue"

export const inputGroupAddonVariants = cva(
  "text-base-60 flex h-auto cursor-text items-center justify-center gap-[8px] py-[6px] text-size-14 font-medium select-none [&>svg:not([class*='size-'])]:size-[16px] [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        "inline-start":
          "order-first pl-[12px] has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end":
          "order-last pr-[12px] has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start":
          "order-first w-full justify-start px-[12px] pt-[12px] [.border-b]:pb-[12px] group-has-[>input]/input-group:pt-[10px]",
        "block-end":
          "order-last w-full justify-start px-[12px] pb-[12px] [.border-t]:pt-[12px] group-has-[>input]/input-group:pb-[10px]",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  },
)

export type InputGroupVariants = VariantProps<typeof inputGroupAddonVariants>

export const inputGroupButtonVariants = cva(
  "text-size-14 shadow-none flex gap-[8px] items-center",
  {
    variants: {
      size: {
        "xs": "h-[24px] gap-[4px] px-[8px] rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-[14px] has-[>svg]:px-[8px]",
        "sm": "h-[32px] px-[10px] gap-[6px] rounded-md has-[>svg]:px-[10px]",
        "icon-xs": "size-[24px] rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-[32px] p-0 has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  },
)

export type InputGroupButtonVariants = VariantProps<typeof inputGroupButtonVariants>

export interface InputGroupButtonProps {
  variant?: ButtonVariants["variant"] | null
  size?: InputGroupButtonVariants["size"]
  class?: HTMLAttributes["class"]
}
