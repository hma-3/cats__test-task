<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <loader-full-page />
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
import LoaderFullPage from "./components/LoaderFullPage.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    LoaderFullPage,
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
