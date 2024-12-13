<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <router-link :to="{ name: 'facts' }" class="footer__logo logo">
          <img src="@/assets/logo-white.png" alt="Logo" class="logo__img" />
        </router-link>

        <nav class="footer__nav nav">
          <ul class="nav__list">
            <li class="nav__item">
              <strong class="nav__item-title">Built for catlovers</strong>

              <ul class="nav__sublist nav__sublist--vertical">
                <li>
                  <router-link to="/about">About</router-link>
                </li>

                <li>
                  <router-link to="/blog">Blog</router-link>
                </li>
              </ul>
            </li>

            <li class="nav__item">
              <strong class="nav__item-title">Social</strong>

              <ul class="nav__sublist nav__sublist--horizontal">
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    aria-label="Instagram page"
                  >
                    <ph-instagram-logo weight="fill" class="icon" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    aria-label="Facebook page"
                  >
                    <ph-facebook-logo weight="fill" class="icon" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    aria-label="YouTube channel"
                  >
                    <ph-youtube-logo weight="fill" class="icon" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    aria-label="X (Twitter) page"
                  >
                    <x-logo class="icon" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <hr class="footer__divider" />

      <div class="footer__bottom">
        <p class="footer__copyrights">@cats.com inc. All rights reserved.</p>
        <div class="footer__lang lang">
          <span>English</span>
          <ph-caret-down class="lang__icon" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {
  PhInstagramLogo,
  PhFacebookLogo,
  PhYoutubeLogo,
  PhCaretDown,
} from "phosphor-vue";
import XLogo from "./icons/XLogo.vue";

export default {
  components: {
    PhInstagramLogo,
    PhFacebookLogo,
    PhYoutubeLogo,
    PhCaretDown,
    XLogo,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/mixins.scss" as *;

.container {
  @include on-tablet {
    @media (max-width: 1199px) {
      grid-template-columns: repeat(7, 1fr);
    }
  }
}

.footer {
  padding-block: 32px;
  background-color: var(--c-dark-bg);
  color: var(--c-text-light);

  &__top,
  &__bottom {
    grid-column: 1 / -1;

    display: grid;
    grid-template-columns: subgrid;
  }

  &__top {
    row-gap: 24px;
  }

  &__logo {
    grid-column: 1 / -1;
    justify-self: center;

    @include on-tablet {
      justify-self: stretch;
      grid-column: span 2;
    }
  }

  &__nav {
    grid-column: 1 / -1;

    @include on-tablet {
      grid-column: 4 / -1;
    }

    @include on-desktop {
      grid-column: 9 / -1;
    }
  }

  &__divider {
    grid-column: 1 / -1;

    width: 100%;
    height: 1px;
    margin-top: 16px;

    border: none;
    background-color: var(--c-divider);

    @include on-tablet {
      margin-top: 38px;
    }
  }

  &__bottom {
    font-size: 12px;

    @include on-tablet {
      font-size: 14px;
    }
  }

  &__copyrights {
    grid-column: span 1;
    justify-self: start;
    text-wrap: nowrap;

    color: var(--c-text-secondary-light);

    @include on-tablet {
      grid-column: span 3;
    }
  }

  &__lang {
    grid-column: span 1;
    justify-self: end;

    @include on-tablet {
      grid-column: -3 / -1;
    }
  }
}

.logo {
  &__img {
    height: auto;
    max-height: 67px;
  }
}

.nav {
  display: grid;
  grid-template-columns: subgrid;

  &__list {
    grid-column: 1 / -1;

    display: grid;
    grid-template-columns: subgrid;
    row-gap: 18px;
  }

  &__item {
    grid-column: 1 / -1;

    @include on-tablet {
      grid-column: span 2;
    }
  }

  &__sublist {
    display: flex;
    margin-top: 8px;

    font-size: 14px;

    &--vertical {
      flex-direction: column;
      gap: 8px;

      color: var(--c-text-secondary-light);
    }

    &--horizontal {
      gap: 18px;

      @include on-tablet {
        gap: 24px;
      }
    }
  }
}

.lang {
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  align-items: center;

  &__icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>
