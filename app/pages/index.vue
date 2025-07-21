<script setup lang="ts">
import { useCheckboxGroup } from '~/components/Base/Checkbox'

const data = [
  { id: 1, text: 'Roman' },
  { id: 2, text: 'Liza', },
  { id: 3, text: 'Stas', disabled: true },
]

const { model, array, value, indeterminate, checkAllModel } = useCheckboxGroup(data, 'text')

</script>

<template>
  <div>
    <base-checkbox v-model="checkAllModel" :indeterminate="indeterminate" text="Выбрать все" />
    <base-checkbox-group v-model="model" :array="array" option-text="text" :option-value="value" />
    <pre>{{ model }}</pre>
  </div>
</template>
