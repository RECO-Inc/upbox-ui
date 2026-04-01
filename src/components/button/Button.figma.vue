<script setup lang="ts">
import figma from "@figma/code-connect"
import Button from "./Button.vue"

figma.connect(Button, "https://www.figma.com/file/...", {
  props: {
    // 피그마 속성(Variant)과 Vue Prop 매핑
    variant: figma.enum("Type", {
      Primary: "primary",
      Secondary: "secondary",
    }),
    label: figma.textContent("Label"),
    disabled: figma.boolean("Disabled"),
  },
  // 개발자 모드에 나타날 실제 코드 예시
  example: (props) => `
    <Button 
      variant="${props.variant}" 
      :disabled="${props.disabled}">
      ${props.label}
    </Button>
  `,
})
</script>