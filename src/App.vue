<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <app-loader />
    </transition>

    <app-header />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <app-footer v-if="!isLoginPage" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppLoader from "./components/AppLoader.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    AppLoader,
  },

  computed: {
    isLoginPage() {
      return this.$route.name === "login";
    },
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s ease-in-out;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
