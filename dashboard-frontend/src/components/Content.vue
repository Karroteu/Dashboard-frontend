<script setup>
import Overview from '../components/tiles/Overview.vue'
</script>

<template>
  <div class="content">
    <overview messages="30" calls="25" emails="15"/>
  </div>
</template>

<style lang="scss" scoped>
@import '../src/assets/variables';

.content {
  padding: 1rem;
}

</style>