<script setup lang="ts">
import { getUser } from "@users/api";

const { data, error } = getUser();
</script>
<template>
  <div>
    <div>{{ data }}</div>
    <pre>{{ error }}</pre>
  </div>
</template>

<style lang="scss" scoped></style>
