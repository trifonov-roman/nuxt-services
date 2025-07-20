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

<style lang="scss" scoped>
.base-button {
    --color-primary: #2563eb;
    --color-primary-hover: #1d4ed8;

    --color-secondary: #6b7280;
    --color-secondary-hover: #4b5563;

    --color-tertiary: #9ca3af;
    --color-tertiary-hover: #6b7280;

    --color-alarm: #dc2626;
    --color-alarm-hover: #b91c1c;

    --color-bg-secondary: #e5e7eb;
    --color-bg-secondary-hover: #d1d5db;

    --color-bg-transparent-hover: rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;

    &.reverse {
        flex-direction: row-reverse;
    }
}

.visual-button {
    justify-content: center;
    border: none;
    border-radius: 4px;
    gap: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;

    &.disabled {
        opacity: 0.6;
        cursor: not-allowed;
        pointer-events: none;
    }

    &.theme-primary {
        background-color: var(--color-primary);
        color: white;

        &:hover {
            background-color: var(--color-primary-hover);
        }
    }

    &.theme-secondary {
        background-color: var(--color-bg-secondary);
        color: #111827;

        &:hover {
            background-color: var(--color-bg-secondary-hover);
        }
    }

    &.theme-alarm {
        background-color: var(--color-alarm);
        color: white;

        &:hover {
            background-color: var(--color-alarm-hover);
        }
    }

    &.theme-transparent {
        background-color: transparent;
        color: #111827;

        &:hover {
            background-color: var(--color-bg-transparent-hover);
        }
    }

    &.size-extra-large {
        padding: 14px 24px;
        font-size: 18px;

        .base-button-wrapper {
            width: 32px;
            height: 32px;
        }
    }

    &.size-large {
        padding: 10px 20px;
        font-size: 16px;

        .base-button-wrapper {
            width: 24px;
            height: 24px;
        }
    }

    &.size-medium {
        padding: 8px 16px;
        font-size: 14px;

        .base-button-wrapper {
            width: 20px;
            height: 20px;
        }
    }

    &.size-small {
        padding: 6px 12px;
        font-size: 12px;

        .base-button-wrapper {
            width: 16px;
            height: 16px;
        }
    }

    .base-button-wrapper {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .base-button-icon {
        width: 100%;
        height: 100%;
    }
}

.visual-text {
    background-color: transparent;
    border: none;
    padding: 0;
    gap: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s ease;

    &.disabled {
        opacity: 0.6;
        cursor: not-allowed;
        pointer-events: none;
    }


    &.theme-primary {
        color: var(--color-primary);

        &:hover {
            color: var(--color-primary-hover);
        }
    }

    &.theme-secondary {
        color: var(--color-secondary);

        &:hover {
            color: var(--color-secondary-hover);
        }
    }

    &.theme-tertiary {
        color: var(--color-tertiary);

        &:hover {
            color: var(--color-tertiary-hover);
        }
    }

    &.size-large {
        font-size: 16px;

        .base-button-wrapper {
            width: 20px;
            height: 20px;
        }
    }

    &.size-medium {
        font-size: 14px;

        .base-button-wrapper {
            width: 16px;
            height: 16px;
        }
    }

    &.size-small {
        font-size: 12px;

        .base-button-wrapper {
            width: 14px;
            height: 14px;
        }
    }

    .base-button-wrapper {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .base-button-icon {
        width: 100%;
        height: 100%;
    }
}
</style>