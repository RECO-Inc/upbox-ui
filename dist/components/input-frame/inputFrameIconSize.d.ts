import { InputFrameContextSize } from './inputFrameContext';
/** `InputFrame` 높이·타이포에 맞춘 자식 `svg` 크기 (래퍼에 `[&>svg]:…` 로 부착) */
export declare function inputFrameIconSvgSizeClasses(size: InputFrameContextSize | undefined): string;
/** `lucide-vue-next` 등 아이콘에 직접 붙이는 `h/w` 클래스 */
export declare function inputFrameIconDirectSizeClasses(size: InputFrameContextSize | undefined): string;
