<template>
  <router-link
    :to="{
      name: 'fact',
      params: { fact: catFact },
    }"
    class="fact"
  >
    <img :src="catFact.imgPath" alt="Cat image" class="fact__img" />

    <div class="fact__container">
      <h2 v-if="catFact.length < 100" class="fact__content">
        {{ catFact.fact }}
      </h2>

      <p v-else class="fact__content">
        {{ catFact.fact }}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    catFact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/mixins.scss" as *;

.fact {
  width: 100%;
  background-color: inherit;
  border-radius: 6px;

  @include on-tablet {
    height: 459px;
  }

  &__img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 8px;

    @include on-tablet {
      margin-bottom: 24px;
    }
  }

  &__container {
    padding: 16px;
  }

  &__content {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @include on-tablet {
      -webkit-line-clamp: 6;
    }
  }

  @include hover-change-bg(var(--c-soft-accent-bg));
}
</style>
