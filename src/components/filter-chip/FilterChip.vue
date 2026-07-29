<script setup lang="ts">
import { computed } from "vue"
import { IconChevronDown } from "../../icons"
import type { FilterChipProps } from "."
import { cn } from "../../lib/utils"
import { filterChipLabelColor, filterChipVariants } from "."

const props = withDefaults(defineProps<FilterChipProps>(), {
  round: false,
  device: "web",
  state: "placeholder",
  chevron: true,
})

const labelColor = computed(() => filterChipLabelColor[props.device][props.state])

const hasCount = computed(
  () => props.count !== undefined && props.count !== null && props.count !== "",
)
</script>

<template>
  <div
    :class="cn(
      filterChipVariants({ round: props.round, device: props.device, state: props.state }),
      props.class,
    )"
  >
    <slot name="badge" />
    <span class="inline-flex items-center gap-[4px] pl-[4px]">
      <span :class="labelColor">
        <slot />
      </span>
      <span v-if="hasCount" class="font-semibold text-status-informative">
        +{{ props.count }}
      </span>
    </span>
    <IconChevronDown
      v-if="props.chevron"
      class="size-[16px] shrink-0 text-grey-60"
    />
  </div>
</template>
