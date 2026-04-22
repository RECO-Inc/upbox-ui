<script setup lang="ts" generic="T">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { ChevronDown, Check, RotateCcw } from "lucide-vue-next";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Checkbox } from "../checkbox";
import { Button } from "../button";
import { Input } from "../input";
import { cn } from "../../lib/utils";

export interface DropdownFilterOption<V = unknown> {
  label: string;
  value: V;
  isActive?: boolean;
}

const modelValue = defineModel<T[]>({ required: true, default: () => [] });
const props = withDefaults(defineProps<{
  options: DropdownFilterOption<T>[];
  disabled?: boolean;
  readonly?: boolean;
  canAll?: boolean;
  single?: boolean;
  search?: boolean;
  placeholder?: string;
  size?: 'small' | 'regular' | 'large';
  displayStyle?: 'default' | 'filled' | 'highlight';
}>(), {
  disabled: false,
  readonly: false,
  canAll: true,
  single: false,
  search: false,
  placeholder: '',
  size: 'regular',
  displayStyle: 'default',
});

const emit = defineEmits<{
  (e: 'change', value: T[]): void;
}>();

const { t } = useI18n();
const isOpen = ref(false);
const searchKeyword = ref('');

const isPickerDisabled = computed(() => props.disabled || props.readonly);

const filteredOptions = computed(() => {
  return props.options.filter((item) => {
    return item.isActive !== false && item.label.toLowerCase().includes(searchKeyword.value.toLowerCase());
  });
});

const isSelectAll = computed(() => {
  return modelValue.value.length >= filteredOptions.value.length && filteredOptions.value.length > 0;
});

const isSelectSome = computed(() => {
  return modelValue.value.length > 0;
});

const shownText = computed(() => {
  if (!modelValue.value || modelValue.value.length === 0) {
    return '';
  }
  if (modelValue.value.length === 1) {
    const found = props.options.find((item) => item.value === modelValue.value[0]);
    return found?.label ?? t('common.noData');
  }
  const found = props.options.find((item) => item.value === modelValue.value[0]);
  return found?.label ?? t('common.noData');
});

const multiCountText = computed(() => {
  if (modelValue.value.length <= 1) {
    return '';
  }
  return t('ui.component.dropdownFilter.countMore', { count: modelValue.value.length - 1 });
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'small':
      return 'h-[32px] px-[8px] text-size-12';
    case 'large':
      return 'h-[48px] px-[16px] text-size-16';
    default:
      return 'h-[40px] px-[12px] text-size-14';
  }
});

const displayClasses = computed(() => {
  const classes = [sizeClasses.value];

  if (isSelectSome.value) {
    if (props.displayStyle === 'highlight') {
      classes.push('bg-navy-80 border-navy-80 text-grey-10');
    } else {
      classes.push('bg-navy-20 border-navy-20 text-navy-90');
    }
  } else {
    if (props.displayStyle === 'filled') {
      classes.push('bg-grey-20 border-grey-20 text-grey-90');
    } else {
      classes.push('bg-grey-10 border-grey-40 text-grey-60');
    }
  }

  return classes.join(' ');
});

function clickAll() {
  if (modelValue.value.length >= filteredOptions.value.length) {
    emit('change', []);
    modelValue.value = [];
  } else {
    const values = filteredOptions.value.map((item) => item.value);
    emit('change', values);
    modelValue.value = values;
  }
}

function onClickItem(item: DropdownFilterOption<T>) {
  if (props.disabled || props.readonly) return;

  if (props.single) {
    emit('change', [item.value]);
    modelValue.value = [item.value];
    isOpen.value = false;
    return;
  }

  const foundIndex = modelValue.value.findIndex((v) => v === item.value);

  if (foundIndex === -1) {
    const newValue = [...modelValue.value, item.value];
    emit('change', newValue);
    modelValue.value = newValue;
  } else {
    const newValue = modelValue.value.filter((v) => v !== item.value);
    emit('change', newValue);
    modelValue.value = newValue;
  }
}

function isItemSelected(item: DropdownFilterOption<T>): boolean {
  return modelValue.value.includes(item.value);
}

function onReset() {
  emit('change', []);
  modelValue.value = [];
}
</script>

<template>
  <div class="dropdown-filter">
    <slot name="label" />
    <Popover v-model:open="isOpen">
      <PopoverTrigger as-child :disabled="isPickerDisabled">
        <button
          type="button"
          :disabled="isPickerDisabled"
          :class="cn(
            'flex w-full items-center justify-between rounded-sm border transition-colors cursor-pointer',
            displayClasses,
            isPickerDisabled && 'opacity-50 cursor-not-allowed'
          )"
        >
          <div class="flex items-center gap-[4px] overflow-hidden text-size-13">
            <span v-if="shownText" :class="cn('truncate font-bold', props.displayStyle === 'highlight' ? 'text-grey-10' : 'text-navy-80')">{{ shownText }}</span>
            <span v-else class="text-grey-50">{{ props.placeholder }}</span>
            <span v-if="multiCountText" :class="cn('shrink-0 font-bold', props.displayStyle === 'highlight' ? 'text-grey-10' : 'text-navy-80')">{{ multiCountText }}</span>
          </div>
          <ChevronDown
            :class="cn(
              'shrink-0 transition-transform duration-200',
              props.size === 'small' ? 'h-[16px] w-[16px]' : 'h-[20px] w-[20px]',
              isOpen && 'rotate-180'
            )"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        class="w-auto min-w-[200px] max-w-[320px] p-[8px]"
        align="start"
      >
        <!-- Search -->
        <div v-if="props.search" class="mb-[8px]">
          <Input
            v-model="searchKeyword"
            :placeholder="t('common.search')"
            size="small"
            clearable
          />
        </div>

        <!-- Options List -->
        <div class="max-h-[280px] overflow-y-auto">
          <!-- Select All -->
          <div
            v-if="props.canAll && !props.single && searchKeyword === ''"
            class="flex items-center gap-[8px] px-[8px] py-[8px] rounded-sm cursor-pointer hover:bg-navy-10"
            @click="clickAll"
          >
            <Checkbox
              :model-value="isSelectAll"
            />
            <span class="flex-1 text-size-14 font-medium">{{ t('common.selectAll') }}</span>
          </div>

          <!-- Options -->
          <template v-if="filteredOptions.length > 0">
            <div
              v-for="item in filteredOptions"
              :key="String(item.value)"
              class="flex items-center gap-[8px] px-[8px] py-[8px] rounded-sm cursor-pointer hover:bg-navy-10"
              @click="onClickItem(item)"
            >
              <Checkbox
                v-if="!props.single"
                :model-value="isItemSelected(item)"
              />
              <slot name="item" :item="item">
                <span class="flex-1 text-size-14">{{ item.label }}</span>
              </slot>
              <Check
                v-if="props.single && isItemSelected(item)"
                class="h-[16px] w-[16px] text-blue-80"
              />
            </div>
          </template>
          <template v-else>
            <div class="px-[8px] py-[16px] text-center text-size-14 text-grey-50">
              {{ t('common.noData') }}
            </div>
          </template>
        </div>

        <!-- Footer -->
        <div
          v-if="!props.single"
          class="flex items-center justify-between mt-[8px] pt-[8px] border-t border-grey-30"
        >
          <Button
            variant="secondary"
            button-style="outlined"
            size="xsmall"
            @click="onReset"
          >
            <RotateCcw class="mr-[4px] h-[12px] w-[12px]" />
            {{ t('common.reset') }}
          </Button>
          <span class="text-size-12 text-grey-60">
            <span class="text-blue-80 font-bold">{{ modelValue.length }}</span>
            {{ t('ui.component.dropdownFilter.selected') }}
          </span>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>
