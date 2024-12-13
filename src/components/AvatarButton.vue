<template>
  <div ref="avatar" class="avatar">
    <button
      v-if="username"
      type="button"
      class="avatar__button"
      @click="toggleDropdown"
    >
      {{ username[0].toUpperCase() }}
    </button>

    <transition name="menu-show">
      <menu v-if="isOpen" class="avatar__menu menu">
        <li class="menu__item" @click="logout">Log out</li>
      </menu>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      username: localStorage.getItem("username") || "",
    };
  },

  mounted() {
    document.addEventListener("click", this.closeMenu);
  },

  beforeDestroy() {
    document.removeEventListener("click", this.closeMenu);
  },

  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },

    logout() {
      localStorage.removeItem("username");
      this.$router.push({ name: "login" });
      this.isOpen = false;
    },

    closeMenu(event) {
      if (this.$refs.avatar && !this.$refs.avatar.contains(event.target)) {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/mixins.scss" as *;

.avatar {
  position: relative;

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 32px;
    aspect-ratio: 1 / 1;

    color: var(--c-text-light);

    background-color: var(--c-accent-bg);
    border: none;
    border-radius: 50%;

    @include on-tablet {
      height: 56px;
      font-size: 31px;
    }
  }
}

.menu {
  position: absolute;
  width: 100px;
  top: 100%;
  right: 0;

  color: var(--c-text-secondary-dark);
  background-color: var(--c-soft-accent-bg);
  border-radius: 6px;

  transform: translateY(16px);
  z-index: 1;

  @include on-tablet {
    width: 148px;
    transform: translateY(26px);
  }

  &__item {
    padding: 12px 16px;
    width: 100%;
    height: 48px;

    line-height: 27px;

    border-radius: 6px;
    cursor: pointer;

    @include hover-change-bg();
  }
}

.menu-show {
  @include show-transition();
}
</style>
