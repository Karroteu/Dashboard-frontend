<script setup>

defineProps({
  isYou: Boolean,
})

</script>

<template>
  <button :class="{ 'user-listing__is-you': isYou, 'user-listing': !isYou }">
    <div class="user-listing__profile-picture">
      <font-awesome-icon icon="fa-solid fa-user" />
    </div>
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
  font-weight: 600;
  transition: 300ms;
  min-height: 3rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  background: none;
  color: $font-color;

  .user-listing__profile-picture {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background: linear-gradient($primary-color, $secondary-color);
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
      color: $font-light-color;
    }
  }

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
}

.user-listing__is-you {
  &::after {
    content: '(You)';
    font-size: 0.925rem;
    color: $font-dark-color;
  }
}
</style>