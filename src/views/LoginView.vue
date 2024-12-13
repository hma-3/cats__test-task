<template>
  <main class="main container login">
    <h2 class="login__title">Log in</h2>

    <form method="post" class="login__form" @submit.prevent="handleLogin">
      <label class="login__label">
        <span>Name</span>

        <input
          id="username"
          v-model.trim="username"
          placeholder="Enter your name"
          class="login__input"
          :class="{ 'login__input--error': error }"
        />

        <p v-if="error" class="login__error">{{ error }}</p>
      </label>

      <base-button
        type="submit"
        class="login__button"
        filled
        @click="handleLogin"
      >
        Log in
      </base-button>
    </form>
  </main>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },

  data() {
    return {
      username: "",
      error: null,
    };
  },

  watch: {
    username: function () {
      this.error = null;
    },
  },

  methods: {
    handleLogin() {
      if (!this.username.length) {
        this.error = "Enter your name";
        return;
      }

      if (!/^[a-zA-Z]+$/.test(this.username)) {
        this.error = "Username can contain only Latin letters";
        return;
      }

      if (this.username.length < 3 || this.username.length > 16) {
        this.error = "Username must be from 3 to 15 characters";
        return;
      }

      localStorage.setItem("username", this.username);
      this.$router.push({ name: "facts" });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/mixins.scss" as *;

.main {
  margin-top: 115px;

  @media (max-width: 639px) {
    margin-block: 0 10vh;
    align-self: center;
  }
}

.login {
  width: 100%;
  align-content: start;
  row-gap: 24px;

  &__title {
    grid-column: 1 / -1;
    justify-self: center;

    @include on-tablet {
      grid-column: 2 / span 4;
      row-gap: 48px;
    }

    @include on-desktop {
      grid-column: 5 / span 4;
    }
  }

  &__form {
    grid-column: 1 / -1;

    display: flex;
    flex-direction: column;
    gap: 48px;

    width: 100%;
    max-width: 410px;
    margin-inline: auto;

    @include on-tablet {
      grid-column: 2 / span 4;
    }

    @include on-desktop {
      grid-column: 5 / span 4;
    }
  }

  &__label {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__input {
    &--error {
      border-color: var(--c-error);
    }
  }

  &__error {
    position: absolute;
    bottom: 0;
    color: var(--c-error);
    font-size: 14px;
    line-height: 18px;

    transform: translateY(calc(100% + 2px));
  }

  &__button {
    width: 55%;
    align-self: center;
  }
}
</style>
