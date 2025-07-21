<script setup lang="ts">
import type { BaseButtonProps } from './type';

const {
    text,
    iconPosition = 'left',
    loading = false,
    disabled = false,
    theme = 'primary',
    size = 'medium',
    width = 'auto',
    visualType = 'button'
} = defineProps<BaseButtonProps>()

const buttonClass = computed(() => ({
    [`visual-${visualType}`]: true,
    reverse: iconPosition === 'right',
    disabled,
    [`width-${width}`]: true,
    [`theme-${theme}`]: true,
    [`size-${size}`]: true
}))
</script>

<template>
    <button class="base-button" :class="buttonClass" :disabled="disabled" type="button" data-testid="base-button">
        <span v-if="iconName" class="base-button-wrapper">
            <BaseLoader v-if="loading" data-testid="base-button-loader" />
            <Icon v-else class="base-button-icon" :name="`local:${iconName}`" />
        </span>
        <span v-if="text">{{ text }}</span>
    </button>
</template>

<style lang="scss" scoped src="./index.scss" />