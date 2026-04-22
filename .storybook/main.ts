import type { StorybookConfig } from '@storybook/vue3-vite'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: 'github-light',
                  keepBackground: true,
                },
              ],
            ],
          },
        },
      },
    },
    '@storybook/addon-onboarding',
  ],
  framework: '@storybook/vue3-vite',
}
export default config
