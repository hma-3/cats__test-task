<template>
  <div class="loading-overlay" :class="{ 'loading-overlay--hidden': !loading }">
    <app-loader />
  </div>
</template>

<script>
import AppLoader from "./AppLoader.vue";

export default {
  components: { AppLoader },
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
</style>
