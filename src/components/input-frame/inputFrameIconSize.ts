import type { InputFrameContextSize } from "./inputFrameContext"

function resolveSize(size: InputFrameContextSize | undefined): InputFrameContextSize {
  return size ?? "regular"
}

/** `InputFrame` 높이·타이포에 맞춘 자식 `svg` 크기 (래퍼에 `[&>svg]:…` 로 부착) */
export function inputFrameIconSvgSizeClasses(
  size: InputFrameContextSize | undefined,
): string {
  switch (resolveSize(size)) {
    case "small":
      return "[&>svg]:h-[16px] [&>svg]:w-[16px]"
    case "regular":
    case "large":
      return "[&>svg]:h-[20px] [&>svg]:w-[20px]"
  }
}

/** `lucide-vue-next` 등 아이콘에 직접 붙이는 `h/w` 클래스 */
export function inputFrameIconDirectSizeClasses(
  size: InputFrameContextSize | undefined,
): string {
  switch (resolveSize(size)) {
    case "small":
      return "h-[16px] w-[16px]"
    case "regular":
    case "large":
      return "h-[20px] w-[20px]"
  }
}
