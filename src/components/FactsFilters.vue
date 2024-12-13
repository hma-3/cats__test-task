<template>
  <div class="filters container">
    <label class="filters__search-label">
      <ph-magnifying-glass class="icon" />

      <input
        v-model.trim="localSearch"
        type="text"
        class="filters__search-input"
        placeholder="Search facts here"
      />

      <ph-x class="filters__clear icon" @click="clearSearch" />
    </label>

    <dropdown-menu
      class="filters__sort"
      :options="options"
      @select="handleSelect"
    />
  </div>
</template>

<script>
import { PhMagnifyingGlass, PhX } from "phosphor-vue";
import DropdownMenu from "../components/DropdownMenu.vue";

export default {
  components: { PhMagnifyingGlass, PhX, DropdownMenu },

  props: {
    search: {
      type: String,
      default: "",
    },

    selectedOption: {
      type: String,
      default: "",
    },

    options: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      localSearch: this.search,
    };
  },

  watch: {
    localSearch(newSearch) {
      this.$emit("update:search", newSearch);
    },
  },

  methods: {
    handleSelect(option) {
      this.$emit("select", option);
    },
    clearSearch() {
      this.localSearch = "";
      this.$emit("update:search", "");
    },
  },
};
</script>

<style lang="scss">
@use "@/assets/styles/mixins.scss" as *;

.filters {
  padding: 0;
  margin: 0;
  row-gap: 16px;

  &__clear {
    visibility: hidden;
    cursor: pointer;
  }

  &__search-label {
    grid-column: 1 / -1;
    padding-inline: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    color: var(--c-text-secondary-dark);

    border: 1px solid transparent;
    border-radius: 6px;
    background-color: var(--c-soft-accent-bg);

    &:has(:focus-visible) {
      border-color: var(--c-border);
    }

    &:has(:focus-visible),
    &:hover {
      .filters__clear {
        visibility: visible;
      }
    }

    @include on-tablet {
      grid-column: span 3;
      margin-right: 38px;
      padding-inline: 16px;
    }

    @include on-desktop {
      grid-column: span 4;
    }
  }

  &__search-input {
    width: 100%;
    padding: 0;

    border: none;

    &:focus {
      border: none;
    }
  }

  &__sort {
    grid-column: 1 / -1;

    @include on-tablet {
      grid-column: 5 / -1;
    }

    @include on-desktop {
      grid-column: 10 / span 3;
    }
  }
}
</style>
