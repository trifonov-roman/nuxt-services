
<script setup lang="ts">
const {isGreen} = defineProps<{
    isGreen:boolean
}>()
</script>
<template>
  <h1 :style="isGreen && {color:'green'}">title</h1>
</template>

<style lang="scss" scoped>

</style>