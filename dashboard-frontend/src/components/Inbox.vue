<template>
  <div class="inbox">
    <div class="inbox__icon">
      <font-awesome-icon icon="fa-solid fa-envelope" />
    </div>
    <div class="inbox__text">
      <span class="icon__text__title">{{ label }}</span>
      <span class="icon__text__number">{{ number }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  number: Number,
})
</script>

<style lang="scss" scoped>
@import '../src/assets/variables';

.inbox {
  display: flex;
  gap: 1rem;

  .inbox__icon {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: linear-gradient($primary-color-2, $primary-color-2-darker);
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
      width: 1.75rem;
      height: 1.75rem;
      color: $background-color;
      opacity: 0.85;
    }
  }

  .icon__text__title {
    font-weight: 600;
  }

  .inbox__text {
    display: flex;
    flex-direction: column;
    cursor: default;

    .icon__text__number {
      color: $font-dark-color;
    }
  }
}
</style>