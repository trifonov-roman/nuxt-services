<script setup lang="ts" generic="T extends CheckboxGroupObject, K extends keyof T">
import type { CheckboxGroupObject, CheckboxGroupProps } from './type';



const props = defineProps<CheckboxGroupProps<T, K>>()

const emit = defineEmits<{
  (e: 'update:modelValue', val: T[K][]): void
}>()

const model = computed({
  get: () => props.modelValue,
  set: (val: T[K][]) => emit('update:modelValue', val),
})

provide('checkbox-group', model)
</script>

<template>
  <div class="base-checkbox-group">
    <BaseCheckbox v-for="item in array" :key="String(item[optionValue])" :value="String(item[optionValue])"
      :text="String(item[optionText])" :disabled="item.disabled" />
  </div>
</template>
