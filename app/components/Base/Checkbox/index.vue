<script setup lang="ts" generic="T extends CheckboxValues">
import type { CheckboxProps, CheckboxValues } from './type';

const props = defineProps<CheckboxProps<T>>()

const model = defineModel<boolean>()

const groupModel = inject<Ref<T[]> | null>('checkbox-group', null)

const isChecked = computed<boolean>({
  get() {
    if (groupModel && props.value !== undefined) {
      return groupModel.value.includes(props.value)
    }
    return model.value ?? false
  },
  set(val) {
    if (groupModel && props.value !== undefined) {
      const list = [...groupModel.value]
      const index = list.indexOf(props.value)
      if (val && index === -1) list.push(props.value)
      else if (!val && index !== -1) list.splice(index, 1)
      groupModel.value = list
    } else {
      model.value = val
    }
  },
})
</script>

<template>
  <label class="base-checkbox">
    <input v-model="isChecked" type="checkbox" :disabled="disabled" :indeterminate="indeterminate"
      class="base-checkbox__input">
    <span v-if="text" class="base-checkbox__label">{{ text }}</span>
  </label>
</template>
