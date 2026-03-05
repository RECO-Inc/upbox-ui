import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Extend tailwind-merge to recognize custom color classes
const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "size-9", "size-10", "size-11", "size-12", "size-13", "size-14",
            "size-15", "size-16", "size-18", "size-20", "size-22", "size-24",
            "size-28", "size-32",
          ],
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
