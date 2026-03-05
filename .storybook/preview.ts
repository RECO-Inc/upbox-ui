import type { Preview } from '@storybook/vue3-vite'
import 'pretendard/dist/web/static/pretendard.css'
import '../src/tokens.css'
import './storybook.css'

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
