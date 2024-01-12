<script setup>

defineProps({
  icon: String,
  active: Boolean,
})

</script>

<template>
  <button :class="{ button__active: active, button__default: !active }">
    <font-awesome-icon class="left-pad-category__icon" v-if="icon === 'book'" icon="fa-solid fa-book" />
    <font-awesome-icon class="left-pad-category__icon" v-if="icon === 'chart'" icon="fa-solid fa-chart-line" />
    <font-awesome-icon class="left-pad-category__icon" v-if="icon === 'gear'" icon="fa-solid fa-gear" />
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import '../src/assets/variables';

button {
  border-radius: 1rem;
  border: none;
  font-size: 1rem;
  font-family: Poppins, sans-serif;
  transition: 300ms;
  min-height: 3rem;
  padding: 0 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
    box-shadow: 0 0.125rem 0.25rem $font-dark-color;
    background-position: 60%;
  }
}

.left-pad-category__icon {
  color: $font-dark-color;
}

.button__active {
  // background: linear-gradient($primary-color, $primary-color-darker);
  background: url('../assets/background.webp');
  background-size: cover;
  text-shadow: 0 0 0.25rem $background-color;
  transition: 300ms;
}

.button__default {
  background: none;
}
</style>