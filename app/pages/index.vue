<script setup lang="ts">
import { useUserStore } from '@user/store';



const store = useUserStore();
const { user } = storeToRefs(store);
</script>
<template>
  <div>
    <nuxt-link to="/login">На авторизацию</nuxt-link>
    <pre>{{ user }}</pre>

    <base-button icon-name="book" text="текст" />
  </div>
</template>

<style lang="scss" scoped></style>
