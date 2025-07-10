<script setup lang="ts">
import { useUiStore } from '@ui/store';

const store = useUiStore()
const { isOpenSideBar, randomText } = storeToRefs(store)

const localState = ref(false)
</script>
<template>
  <div>
    <input v-model="localState" type="checkbox">
    <nuxt-link to="/">На главную</nuxt-link>
    <button @click="isOpenSideBar = !isOpenSideBar">{{ isOpenSideBar ? 'Сайдбар открыт' : 'Сайдбар закрыт' }}</button>
    <input v-model="randomText" type="text">
    <BaseTitle :is-green="true"/>
  </div>
</template>

<style lang="scss" scoped></style>
