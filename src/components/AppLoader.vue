<template>
  <div class="loading-overlay" :class="{ 'loading-overlay--hidden': !loading }">
    <div class="loader">
      <div class="loader__dot"></div>
      <div class="loader__dot"></div>
      <div class="loader__dot"></div>
      <div class="loader__dot"></div>
      <div class="loader__dot"></div>
      <div class="loader__dot"></div>
      <div class="loader__dot"></div>
      <div class="loader__dot"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  background-color: var(--c-main-bg);
  z-index: 1000;

  &--hidden {
    display: none;
  }
}

.loader {
  --size: 110px;
  --speed: 2s;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: var(--size);
  width: var(--size);

  &__dot {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;

    &::before {
      content: "";
      height: 20%;
      width: 20%;
      border-radius: 50%;
      background-color: var(--c-accent-bg);
      transform: scale(0);
      opacity: 0.5;
      animation: pulse calc(var(--speed) * 1.111) ease-in-out infinite;
      transition: background-color 0.3s ease;
    }

    @for $i from 2 through 8 {
      &:nth-child(#{$i}) {
        transform: rotate(45deg * ($i - 1));

        &::before {
          animation-delay: calc(var(--speed) * (-1 * 0.25 * (4.5 - 0.5 * $i)));
        }
      }
    }
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(0);
    opacity: 0.5;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
