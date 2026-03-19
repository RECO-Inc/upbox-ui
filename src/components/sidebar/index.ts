import type { VariantProps } from "class-variance-authority"
import type { HTMLAttributes } from "vue"
import { cva } from "class-variance-authority"

export interface SidebarProps {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
  class?: HTMLAttributes["class"]
}

export { default as Sidebar } from "./Sidebar.vue"
export { default as SidebarContent } from "./SidebarContent.vue"
export { default as SidebarFooter } from "./SidebarFooter.vue"
export { default as SidebarGroup } from "./SidebarGroup.vue"
export { default as SidebarGroupAction } from "./SidebarGroupAction.vue"
export { default as SidebarGroupContent } from "./SidebarGroupContent.vue"
export { default as SidebarGroupLabel } from "./SidebarGroupLabel.vue"
export { default as SidebarHeader } from "./SidebarHeader.vue"
export { default as SidebarInput } from "./SidebarInput.vue"
export { default as SidebarInset } from "./SidebarInset.vue"
export { default as SidebarMenu } from "./SidebarMenu.vue"
export { default as SidebarMenuAction } from "./SidebarMenuAction.vue"
export { default as SidebarMenuBadge } from "./SidebarMenuBadge.vue"
export { default as SidebarMenuButton } from "./SidebarMenuButton.vue"
export { default as SidebarMenuItem } from "./SidebarMenuItem.vue"
export { default as SidebarMenuSkeleton } from "./SidebarMenuSkeleton.vue"
export { default as SidebarMenuSub } from "./SidebarMenuSub.vue"
export { default as SidebarMenuSubButton } from "./SidebarMenuSubButton.vue"
export { default as SidebarMenuSubItem } from "./SidebarMenuSubItem.vue"
export { default as SidebarProvider } from "./SidebarProvider.vue"
export { default as SidebarRail } from "./SidebarRail.vue"
export { default as SidebarSeparator } from "./SidebarSeparator.vue"
export { default as SidebarTrigger } from "./SidebarTrigger.vue"

export { useSidebar } from "./utils"

export const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-[16px] overflow-hidden rounded p-[16px] text-left font-bold outline-none transition-[background-color,color] duration-200 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-[32px] aria-disabled:pointer-events-none aria-disabled:opacity-50 group-data-[collapsible=icon]:!size-[32px] group-data-[collapsible=icon]:!p-[8px] group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:gap-0 [&>span:last-child]:truncate [&>svg]:size-[16px] [&>svg]:shrink-0 hover:bg-navy-20 data-[active=true]:bg-navy-80 data-[active=true]:text-grey-10 data-[active=true]:font-bold data-[active=true]:[&>svg]:text-grey-10",
  {
    variants: {
      variant: {
        default: "hover:bg-navy-20",
        outline:
          "bg-grey-10 shadow-[0_0_0_1px_hsl(var(--grey-40))] hover:bg-navy-20 hover:shadow-[0_0_0_1px_hsl(var(--grey-30))]",
      },
      size: {
        regular: "text-size-16",
        small: "text-size-14",
        large: "text-size-18 group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "regular",
    },
  },
)

export type SidebarMenuButtonVariants = VariantProps<typeof sidebarMenuButtonVariants>
