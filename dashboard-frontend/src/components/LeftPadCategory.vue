<script setup>

defineProps({
  icon: String,
  active: Boolean,
})

</script>

<template>
  <button :class="{ button__primary: primary, button__secondary: !primary }">
    <font-awesome-icon v-if="icon === 'book'" icon="fa-solid fa-book" />
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import '../src/assets/variables';

button {
  border-radius: 1rem;
  font-size: 1rem;
  font-family: Poppins, sans-serif;
  transition: 300ms;
  min-height: 3rem;
  padding: 0 0.75rem;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
    box-shadow: 0 0.125rem 0.25rem $font-dark-color;
  }
}

.button__primary {
  background: linear-gradient($primary-color, $primary-color-darker);
  border: solid 1px $primary-color-darker;
  color: $font-light-color;
  text-shadow: 0 0 0.25rem $secondary-color;
  transition: 300ms;
}

.button__secondary {
  background: none;
  border: solid 1px $border-color;
}
</style>