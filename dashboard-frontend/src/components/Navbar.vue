<script setup>
import customButton from '../components/Button.vue'

// import { ref } from 'vue'

defineProps({
  title: String,
})

// const count = ref(0)
</script>

<template>
  <nav class="navbar">
    <div class="navbar__left-part">
      <div class="navbar__left-part__logo">
        <img src="../assets/icons/logo.svg" alt="logo" />
        <h1>Dashboard</h1>
      </div>
      <button>
        <img src="../assets/icons/side-panel.svg" alt="hide side panel" />
      </button>
    </div>
    
    <div class="navbar__top-part">
      <h1>{{ title }}</h1>
      <div class="navbar__top-part__actions">
        <custom-button primary>Export</custom-button>
        <custom-button class="navbar__top-part__actions__more"><font-awesome-icon icon="fa-solid fa-ellipsis" /></custom-button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '../src/assets/variables';

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: $background-color;
  color: $font-color;
  font-weight: 400;

  .navbar__left-part {
    display: flex;
    justify-content: space-around;
    width: $side-panel-width;
    border: solid 1px $border-color;
    align-items: center;

    .navbar__left-part__logo {
      display: flex;
      justify-content: space-around;
      gap: 0.5rem;
      cursor: default;

      img {
        width: 2rem;
      }
    }

    button {
      border-radius: 50%;
      border: none;
      background: none;
      width: 3rem;
      height: 3rem;
      transition: background 300ms;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 2rem;
        height: 2rem;
      }

      &:hover {
        background: $hover-color;
      }
    }
  }

  .navbar__top-part {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px $border-color;
    width: 100%;
    padding: 0 1rem;

    .navbar__top-part__actions {
      display: flex;
      gap: 1rem;
      align-items: center;

      .navbar__top-part__actions__more {
        width: 3rem;

        > * {
          color: $font-dark-color;
        }
      }
    }
  }
}
</style>
