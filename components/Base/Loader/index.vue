<template>
    <div class="loader">
        <svg class="circular-loader" viewBox="25 25 50 50">
            <circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke-width="4" />
        </svg>
    </div>
</template>

<style lang="scss" scoped>
.loader {
    width: 100%;
    height: 100%;
}

.loader::before {
    display: block;
    content: '';
}

.circular-loader {
    width: 100%;
    height: 100%;
    margin: auto;
    transform-origin: center center;
    animation: rotate 2s linear infinite;
}

.loader-path {
    stroke: currentcolor;
    stroke-dasharray: 150, 200;
    stroke-dashoffset: -10;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35;
    }

    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124;
    }
}
</style>
