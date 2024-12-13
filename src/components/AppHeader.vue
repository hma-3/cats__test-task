<template>
  <header class="header">
    <div class="container">
      <router-link :to="{ name: 'facts' }" class="header__logo logo">
        <img src="@/assets/logo.png" alt="Logo" class="logo__img" />
      </router-link>

      <avatar-button v-if="isAuthorized" class="header__avatar" />
    </div>
  </header>
</template>

<script>
import AvatarButton from "./AvatarButton.vue";

export default {
  components: { AvatarButton },
  data() {
    return {
      isAuthorized: this.checkAuthorization(),
    };
  },
  watch: {
    $route() {
      this.updateAuthorization();
    },
  },
  created() {
    this.updateAuthorization();

    window.addEventListener("storage", this.updateAuthorization);
  },
  beforeDestroy() {
    window.removeEventListener("storage", this.updateAuthorization);
  },
  methods: {
    checkAuthorization() {
      return localStorage.getItem("username") !== null;
    },
    updateAuthorization() {
      this.isAuthorized = this.checkAuthorization();
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/mixins.scss" as *;

.container {
  height: 100%;
}

.header {
  background-color: var(--c-soft-accent-bg);
  height: 48px;

  @include on-tablet {
    height: 96px;
  }

  &__logo {
    height: 32px;
    grid-column: span 1;

    @include on-tablet {
      grid-column: span 3;
      height: auto;
    }
  }

  &__avatar {
    grid-column: span 1;
    justify-self: end;

    @include on-tablet {
      grid-column: -2 / -1;
    }
  }
}

.logo {
  &__img {
    height: 100%;
  }
}
</style>
