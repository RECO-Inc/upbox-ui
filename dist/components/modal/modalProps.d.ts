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
    /**
     * 배경(overlay) 클릭으로 닫기 (default: **false**)
     *
     * 확인 다이얼로그·폼에서 배경을 잘못 눌러 입력이 날아가는 사고가 크기 때문에
     * 닫지 않는 쪽을 기본으로 둔다. 레거시 `Popup` 의 `closeOnTouchBackground`
     * 기본값과도 같아, 그쪽에서 넘어오는 화면이 옵션 없이 동작을 유지한다.
     */
    closeOnOverlay?: boolean;
    /** ESC 키로 닫기 (default: true) */
    closeOnEscape?: boolean;
    /**
     * 뷰포트를 꽉 채우는 전체화면 모드 (default: false). `size` 는 무시된다.
     *
     * `DialogContent` 가 이미 갖고 있던 것을 Modal 이 위임만 한다. 모바일 전체화면
     * 팝업(알림함·약관·필터 등)이 이 옵션 없이는 Modal 로 넘어오지 못했다.
     */
    fullscreen?: boolean;
    /**
     * 본문 영역에 얹을 클래스 — 레거시 `Popup` 의 `bodyClass` 대응.
     *
     * 좌우 패딩 조정(`px-0`/`px-16`)에 주로 쓴다. Modal 이 본문 `div` 를 소유해
     * 소비자가 바깥에서 잡을 수 없기 때문에 prop 으로 연다(`class` 는 DialogContent
     * 로 간다). 본문이 자기 패딩을 갖도록 구조를 바꿨기 때문에 `px-0` 이 실제로
     * 가장자리까지 붙는다.
     */
    bodyClass?: HTMLAttributes["class"];
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
