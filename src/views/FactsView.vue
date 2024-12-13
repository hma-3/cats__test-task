<template>
  <main class="main facts-page">
    <div class="container">
      <h1 class="facts-page__title">Facts About Cats To Share With Kids!</h1>

      <h2 v-if="errorMessage" class="facts-page__error">{{ errorMessage }}</h2>

      <template v-else>
        <FactsFilters
          class="facts-page__filters"
          :search="search"
          :selected-option="selectedOption"
          :options="options"
          @update:search="search = $event"
          @select="handleSelect"
        />

        <h2 v-if="!visibleFacts.length" class="facts-page__not-found">
          No such facts were found
        </h2>

        <template v-else>
          <section class="facts-page__facts">
            <fact-card
              v-for="fact of visibleFacts"
              :key="fact.id"
              :cat-fact="fact"
              class="facts-page__fact"
            />
          </section>

          <base-button
            v-if="isLoadMoreButtonVisible"
            class="facts-page__load-more"
            type="button"
            @click="loadMoreFacts"
          >
            Load more facts
          </base-button>
        </template>
      </template>
    </div>
  </main>
</template>

<script>
import { nanoid } from "nanoid";
import debounce from "lodash/debounce";
import * as factsApi from "../api/facts.js";

import FactCard from "../components/FactCard.vue";
import FactsFilters from "../components/FactsFilters.vue";
import BaseButton from "../components/BaseButton.vue";

export default {
  components: {
    FactCard,
    FactsFilters,
    BaseButton,
  },

  data() {
    return {
      facts: [],
      filteredFacts: [],
      visibleFacts: [],
      factsAmount: 10,
      currentPage: 1,
      lastPage: null,
      search: this.$route.query.search || "",
      selectedOption: this.$route.query.filter || "All facts",
      options: [
        "All facts",
        "Show long ones first",
        "Show short ones first",
        "Short ones only",
        "Long ones only",
      ],
      errorMessage: "",
    };
  },

  computed: {
    isLoadMoreButtonVisible: function () {
      return (
        this.factsAmount < this.facts.length &&
        this.visibleFacts.length >= this.factsAmount
      );
    },
  },

  watch: {
    filteredFacts: "updateVisibleFacts",
    factsAmount: "updateVisibleFacts",
    search: {
      handler: debounce(function () {
        this.updateQuery();
        this.applyFilters();
      }, 300),
      immediate: true,
    },
    selectedOption: {
      handler: "applyFilters",
      immediate: true,
    },
  },

  mounted: async function () {
    try {
      if (localStorage.getItem("facts") !== null) {
        this.facts = JSON.parse(localStorage.getItem("facts"));
      } else {
        await this.loadFacts();
        localStorage.setItem("facts", JSON.stringify(this.facts));
      }

      this.filteredFacts = this.facts;
    } catch (error) {
      this.errorMessage = "Something went wrong while loading facts";
    }
  },

  methods: {
    async loadFacts() {
      const { data, last_page } = await factsApi.getFacts();

      this.facts = data.map((fact) => ({
        ...fact,
        id: nanoid(),
        imgPath: this.getImagePath(fact),
      }));

      while (this.currentPage < last_page) {
        const { data, current_page } = await factsApi.getNextPage(
          this.currentPage + 1
        );

        this.facts.push(
          ...data.map((fact) => ({
            ...fact,
            id: nanoid(),
            imgPath: this.getImagePath(fact),
          }))
        );

        this.currentPage = current_page;
      }
    },

    getImagePath(fact) {
      for (let i = 9; i > 0; i--) {
        if ((fact.length + fact.fact.charCodeAt(0)) % i === 0) {
          return `/cats/0${i}.jpg`;
        }
      }

      return `/cats/01.jpg`;
    },

    updateVisibleFacts() {
      this.visibleFacts = this.filteredFacts.slice(0, this.factsAmount);
    },

    loadMoreFacts() {
      this.factsAmount += 10;
      this.updateVisibleFacts();
    },

    applyFilters() {
      const searchFiltered = this.search
        ? this.facts.filter((fact) =>
            fact.fact.toLowerCase().includes(this.search.toLowerCase())
          )
        : this.facts;

      switch (this.selectedOption) {
        case "Show long ones first":
          this.filteredFacts = [...searchFiltered].sort(
            (a, b) => b.length - a.length
          );
          break;
        case "Show short ones first":
          this.filteredFacts = [...searchFiltered].sort(
            (a, b) => a.length - b.length
          );
          break;
        case "Short ones only":
          this.filteredFacts = searchFiltered.filter(
            (fact) => fact.length < 100
          );
          break;
        case "Long ones only":
          this.filteredFacts = searchFiltered.filter(
            (fact) => fact.length >= 100
          );
          break;
        default:
          this.filteredFacts = searchFiltered;
      }

      this.updateVisibleFacts();
    },

    handleSelect(option) {
      this.selectedOption = option;
      this.updateQuery();
      this.applyFilters();
    },

    updateQuery() {
      this.$router.push({
        query: {
          search: this.search || undefined,
          filter:
            this.selectedOption !== "All facts"
              ? this.selectedOption
              : undefined,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/mixins.scss" as *;

.facts-page {
  &__title {
    grid-column: 1 / -1;
    text-align: center;
  }

  &__filters {
    grid-column: 1 / -1;
  }

  &__facts {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
    row-gap: 24px;
    margin-bottom: 16px;

    @include on-tablet {
      row-gap: 40px;
      margin-bottom: 24px;
    }
  }

  &__fact {
    grid-column: 1 / -1;

    @include on-tablet {
      grid-column: span 3;
    }
    @include on-desktop {
      grid-column: span 4;
    }
  }

  &__not-found,
  &__error {
    grid-column: 1 / -1;
    justify-self: center;
  }

  &__load-more {
    grid-column: 1 / -1;
    justify-self: center;

    width: 310px;
  }
}
</style>
