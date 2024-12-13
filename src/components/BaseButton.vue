<template>
  <button
    class="button"
    :type="type"
    :class="{ 'button--filled': filled }"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    filled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "button",
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss">
.button {
  width: 100%;
  height: 48px;

  color: var(--c-text-accent);
  font-size: 18px;
  font-weight: 600;
  line-height: 100%;

  background-color: inherit;
  border: 1px solid var(--c-border);
  border-radius: 6px;

  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--c-text-light);
    background-color: var(--c-text-accent);
  }

  &--filled {
    color: var(--c-text-light);
    background-color: var(--c-accent-bg);

    &:hover {
      color: var(--c-text-accent);
      background-color: inherit;
    }
  }
}
</style>
