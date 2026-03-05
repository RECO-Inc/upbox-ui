import type { Meta, StoryObj } from '@storybook/vue3-vite'
import FormItem from './FormItem.vue'
import FormLabel from './FormLabel.vue'
import FormControl from './FormControl.vue'
import FormDescription from './FormDescription.vue'
import FormMessage from './FormMessage.vue'
import { Form, Field as FormField } from 'vee-validate'

const meta = {
  title: 'Components/Form',
  component: FormItem,
  tags: ['autodocs'],
} satisfies Meta<typeof FormItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage },
    template: `
      <Form class="w-full max-w-sm space-y-6">
        <FormField name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full px-3 py-2 border border-base-40 rounded text-size-14 text-base-80 focus:outline-none focus:border-primary-80"
              />
            </FormControl>
            <FormDescription>This is your registered email address.</FormDescription>
          </FormItem>
        </FormField>
      </Form>
    `,
  }),
}

export const WithValidation: Story = {
  render: () => ({
    components: { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage },
    setup() {
      function required(value: string) {
        return value ? true : 'This field is required'
      }
      function minLength(value: string) {
        return value && value.length >= 8 ? true : 'Must be at least 8 characters'
      }
      return { required, minLength }
    },
    template: `
      <Form class="w-full max-w-sm space-y-6">
        <FormField name="username" :rules="required">
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <input
                type="text"
                placeholder="Enter username"
                class="w-full px-3 py-2 border border-base-40 rounded text-size-14 text-base-80 focus:outline-none focus:border-primary-80"
              />
            </FormControl>
            <FormDescription>Your unique display name.</FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="password" :rules="minLength">
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <input
                type="password"
                placeholder="Enter password"
                class="w-full px-3 py-2 border border-base-40 rounded text-size-14 text-base-80 focus:outline-none focus:border-primary-80"
              />
            </FormControl>
            <FormDescription>Must be at least 8 characters long.</FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <button
          type="submit"
          class="w-full px-4 py-2 bg-primary-80 text-base-10 rounded font-bold text-size-14"
        >
          Submit
        </button>
      </Form>
    `,
  }),
}

export const MultipleFields: Story = {
  render: () => ({
    components: { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage },
    template: `
      <Form class="w-full max-w-sm space-y-4">
        <FormField name="firstName">
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <input
                type="text"
                placeholder="John"
                class="w-full px-3 py-2 border border-base-40 rounded text-size-14 text-base-80 focus:outline-none focus:border-primary-80"
              />
            </FormControl>
          </FormItem>
        </FormField>
        <FormField name="lastName">
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <input
                type="text"
                placeholder="Doe"
                class="w-full px-3 py-2 border border-base-40 rounded text-size-14 text-base-80 focus:outline-none focus:border-primary-80"
              />
            </FormControl>
          </FormItem>
        </FormField>
        <FormField name="bio">
          <FormItem>
            <FormLabel>Bio</FormLabel>
            <FormControl>
              <textarea
                placeholder="Tell us about yourself"
                rows="3"
                class="w-full px-3 py-2 border border-base-40 rounded text-size-14 text-base-80 focus:outline-none focus:border-primary-80 resize-none"
              />
            </FormControl>
            <FormDescription>A brief description about yourself.</FormDescription>
          </FormItem>
        </FormField>
        <button
          type="submit"
          class="w-full px-4 py-2 bg-primary-80 text-base-10 rounded font-bold text-size-14"
        >
          Save Profile
        </button>
      </Form>
    `,
  }),
}
