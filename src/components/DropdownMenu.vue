<template>
  <div ref="dropdown" class="dropdown">
    <button class="dropdown__toggle" type="button" @click="toggleDropdown">
      <span>{{ selected || options[0] }}</span>

      <ph-caret-up v-if="isOpen" class="dropdown__icon icon" />
      <ph-caret-down v-else class="dropdown__icon icon" />
    </button>

    <transition name="dropdown-show">
      <menu v-if="isOpen" class="dropdown__menu">
        <li
          v-for="option in options"
          :key="option"
          class="dropdown__item"
          :class="{ 'dropdown__item--selected': selected === option }"
          @click="selectOption(option)"
        >
          <span>{{ option }}</span>
          <ph-check v-if="selected === option" class="icon" />
        </li>
      </menu>
    </transition>
  </div>
</template>

<script>
import { PhCaretDown, PhCaretUp, PhCheck } from "phosphor-vue";

export default {
  components: { PhCaretDown, PhCaretUp, PhCheck },

  props: {
    options: {
      type: Array,
      required: true,
    },

    selectedOption: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isOpen: false,
    };
  },

  computed: {
    selected() {
      return this.selectedOption || this.options[0];
    },
  },

  watch: {
    selectedOption(newOption) {
      this.selected = newOption;
    },
  },

  mounted() {
    document.addEventListener("click", this.closeDropdown);
  },

  beforeDestroy() {
    document.removeEventListener("click", this.closeDropdown);
  },

  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },

    selectOption(option) {
      this.selected = option;
      this.isOpen = false;
      this.$emit("select", option);
    },

    closeDropdown(event) {
      if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target)) {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/mixins.scss" as *;

.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 48px;

  color: var(--c-text-secondary-dark);

  &__toggle {
    width: 100%;
    height: 100%;
    padding: 12px 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 9px;

    background-color: var(--c-soft-accent-bg);
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  &__menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;

    background-color: var(--c-soft-accent-bg);
    border-radius: 6px;

    transform: translateY(6px);
    z-index: 1;
  }

  &__item {
    padding: 12px 16px;

    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 9px;

    cursor: pointer;

    &--selected {
      color: var(--c-text-accent);
    }

    &:first-of-type {
      border-radius: 6px 6px 0 0;
    }

    &:last-of-type {
      border-radius: 0 0 6px 6px;
    }

    @include hover-change-bg();
  }

  .dropdown-show {
    @include show-transition();
  }
}
</style>
