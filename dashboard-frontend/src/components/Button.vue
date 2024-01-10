<script setup>

defineProps({
  primary: Boolean,
})

</script>

<template>
  <button :class="{ button__primary: primary, button__secondary: !primary }">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import '../src/assets/variables';

button {
  border-radius: 1rem;
  font-size: 1rem;
  font-family: Poppins, sans-serif;
  transition: opacity 300ms;
  min-height: 3rem;
  padding: 0 0.75rem;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
}

.button__primary {
  background: linear-gradient($primary-color, $primary-color-darker);
  border: solid 1px $primary-color-darker;
  color: $font-light-color;
  text-shadow: 0 0 0.25rem $secondary-color;
}

.button__secondary {
  background: none;
  border: solid 1px $border-color;
}
</style>