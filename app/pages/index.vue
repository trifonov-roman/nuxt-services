<script setup lang="ts">
import { useCheckboxGroup } from '~/components/Base/Checkbox'

const count = ref(20)
const serverData = ref([
  { id: 1, text: 'Roman', age: 20 },
  { id: 2, text: 'Liza', age: 21 },
  { id: 3, text: 'Stas', age: 22 },
])

const piniaState = ref<string[]>([])
const clientData = computed(() => serverData.value.map((item) => ({
  ...item,
  disabled: item.age > count.value,
})))
const { model, array, value, indeterminate, checkAllModel, isAllDisabled } = useCheckboxGroup(clientData, 'text', piniaState)

</script>

<template>
  <div>
    <pre>{{ clientData }}</pre>
    {{ count }}
    <input v-model="count" type="number">
    <base-checkbox v-model="checkAllModel" :disabled="isAllDisabled" :indeterminate="indeterminate"
      text="Выбрать все" />
    <base-checkbox-group v-model="piniaState" :array="array" option-text="text" :option-value="value" />
    <pre>{{ piniaState }}</pre>


    <base-checkbox-group v-model="piniaState" :array="clientData" option-text="text" option-value="text">
      <template #default="{ item, isChecked, toggle }">
        <div class="custom-wrapper" :class="{ checked: isChecked }" @click="toggle">
          <base-checkbox :value="item.text" :text="item.text" :checked="isChecked" @click.stop />
          <p>Описание: возраст — {{ item.age }}</p>
        </div>
      </template>
    </base-checkbox-group>
  </div>
</template>
