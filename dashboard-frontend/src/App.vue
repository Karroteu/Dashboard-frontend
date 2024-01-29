<script setup>
import navbar from './components/Navbar.vue'
import leftPad from './components/LeftPad.vue'
import content from './components/Content.vue'
</script>

<template>
  <navbar title="Analytics" />
  <div class="center">
    <left-pad />
    <content />
  </div>
</template>

<style lang="scss">
@import 'assets/variables';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

html {
  font-family: Poppins, sans-serif;
  color: $font-color;
}

body {
  margin: 0;
}

.center {
  display: flex;
  flex-direction: row;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
