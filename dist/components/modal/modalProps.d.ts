import { HTMLAttributes } from 'vue';
import { DialogSize } from '../dialog';
export interface ModalProps {
    /** v-model:open */
    open?: boolean;
    /** 헤더 타이틀 (없으면 헤더 생략) */
    title?: string;
    /** 타이틀 아래 보조 설명 */
    description?: string;
    /** 너비 프리셋 (Dialog size 와 동일) */
    size?: DialogSize;
    /** 우상단 닫기(X) 버튼 노출 (default: true) — 레거시 canDefaultClose 대응 */
    showClose?: boolean;
    /** 배경(overlay) 클릭으로 닫기 (default: true) */
    closeOnOverlay?: boolean;
    /** ESC 키로 닫기 (default: true) */
    closeOnEscape?: boolean;
    /** 확인 버튼 텍스트 (default: 확인) — 레거시 confirmButtonText */
    confirmText?: string;
    /** 취소 버튼 텍스트 (default: 닫기) — 레거시 cancelButtonText */
    cancelText?: string;
    /** 확인 버튼을 위험(빨강) 스타일로 — 삭제 확인 등. 레거시 condition='error' 대응 */
    destructive?: boolean;
    /** 확인 버튼 로딩 — 레거시 confirmButtonLoading */
    confirmLoading?: boolean;
    /** 확인 버튼 비활성화 — 레거시 disabledConfirmButton */
    confirmDisabled?: boolean;
    /** 취소 버튼 숨김 → 버튼 1개(alert) 케이스 */
    hideCancel?: boolean;
    /** 확인 버튼 숨김 */
    hideConfirm?: boolean;
    /** footer 버튼을 가로로 꽉 채움 — 레거시 footerButtonGrow */
    footerButtonGrow?: boolean;
    class?: HTMLAttributes["class"];
}
