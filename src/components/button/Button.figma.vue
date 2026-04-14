<script setup lang="ts">
import figma from "@figma/code-connect";
import Button from "./Button.vue";

figma.connect(
  Button,
  "https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp?node-id=3220-15782",
  {
    props: {
      variant: figma.enum("Variant", {
        Primary: "primary",
        Error: "error",
        Positive: "positive",
        Usually: "usually",
        Assistant: "assistant",
        Info: "info",
      }),
      buttonStyle: figma.enum("Style", {
        Filled: "filled",
        Outline: "outlined",
        Text: "text",
      }),
      size: figma.enum("Size", {
        Xsmall: "xsmall",
        Small: "small",
        Regular: "regular",
        Large: "large",
        Xlarge: "xlarge",
      }),
      disabled: figma.boolean("Disabled"),
      loading: figma.boolean("Loading"),
      block: figma.boolean("Block"),
      label: figma.textContent("Label"),
    },
    example: (props) => `
    <Button
      variant="${props.variant}"
      button-style="${props.buttonStyle}"
      size="${props.size}"
      :disabled="${props.disabled}"
      :loading="${props.loading}"
      :block="${props.block}">
      ${props.label}
    </Button>
  `,
  },
);
</script>
