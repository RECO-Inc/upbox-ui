import type { Preview } from '@storybook/vue3-vite'
import { setup } from '@storybook/vue3-vite'
import { createI18n } from 'vue-i18n'
import './storybook.css'

const i18n = createI18n({
  legacy: false,
  locale: 'ko',
  messages: {
    ko: {
      common: {
        noData: '데이터 없음',
        search: '검색',
        selectAll: '전체 선택',
        reset: '초기화',
      },
      word: {
        reset: '초기화',
        done: '완료',
        save: '저장',
        hours: '시',
        minutes: '분',
        seconds: '초',
        time: {
          month: '월',
        },
      },
      ui: {
        empty: '데이터가 없습니다.',
        component: {
          fileUploader: {
            title: '{size}MB 이하의 {ext} 파일을 업로드해주세요.',
            desc: '최대 {count}개까지 업로드 가능합니다.',
            selectFile: '파일 선택',
            isUploading: '업로드 중...',
            uploadStatusError: '업로드 실패',
            empty: '등록된 파일이 없습니다.',
          },
          dropdownFilter: {
            countMore: '외 {count}건',
            selected: '적용',
          },
        },
      },
    },
  },
})

setup((app) => {
  app.use(i18n)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
