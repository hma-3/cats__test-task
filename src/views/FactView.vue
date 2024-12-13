<template>
  <main class="main fact-page">
    <div class="container">
      <button class="fact-page__back back" @click="$router.go(-1)">
        <ph-caret-left class="back__icon icon" />
        <span class="back__text">Back</span>
      </button>

      <img :src="fact.imgPath" alt="Cat picture" class="fact-page__img" />
      <p class="fact-page__content">{{ fact.fact }}</p>
    </div>
  </main>
</template>

<script>
import { PhCaretLeft } from "phosphor-vue";

export default {
  components: { PhCaretLeft },

  data() {
    return {
      fact: {},
    };
  },

  mounted() {
    if (localStorage.getItem("currentFact") !== null) {
      this.fact = JSON.parse(localStorage.getItem("currentFact"));
    } else {
      this.fact = this.$route.params.fact;
      localStorage.setItem("currentFact", JSON.stringify(this.fact));
    }
  },

  beforeDestroy() {
    localStorage.removeItem("currentFact");
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/mixins.scss" as *;

.fact-page {
  margin-top: 24px;
  row-gap: 41px;

  &__back {
    grid-column: 1 / -1;
  }

  &__img,
  &__content {
    grid-column: 1 / -1;
    width: 100%;

    border-radius: 6px;

    @include on-tablet {
      grid-column: 2 / -2;
    }

    @include on-desktop {
      grid-column: 3 / -3;
    }
  }
}

.back {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 2px;

  color: var(--c-text-secondary-dark);

  border: none;
  background-color: inherit;

  &__text {
    line-height: 27px;
  }
}
</style>
