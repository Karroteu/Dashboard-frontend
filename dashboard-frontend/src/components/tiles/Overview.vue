<script setup>
import { ref } from 'vue'

const props = defineProps({
  messages: Number,
  calls: Number,
  emails: Number,
})

const total = ref(props.messages + props.calls + props.emails)

</script>

<template>
  <div class="overview__container">
    <div class="overview__container__left">
      <h2>Total overview</h2>
      <span>Your average daily activity over the last 7 days is <span>{{ total }}</span></span>
    </div>
    
    <!-- {{ messages }} -->
  </div>
</template>

<style lang="scss" scoped>
@import '../src/assets/variables';

.overview__container {
  border: solid 1px $border-color;
  border-radius: 1rem;
  padding: 0.125rem;
  width: 100%;

  .overview__container__left {
    background: url('../src/assets/background.webp');
  }
}
</style>
<!-- Już się nie mogę doczekać na spotkanmie z moiją najśliczniejsząi najwspanialszą dziewczyną i która mnie nigdy nie denerwuje nie wyrowadza z równowagi i wiem, że żartuje na temat dziewczyny z którą się kiedyś zadawałem, ale której wcale nie lubiałem. Ja wiem że ona tylko tak żartuje i jest taka śmieszna i zabawna - a ja taką akcjeptuję. Mi to nmie przeszkadza kocgam ją taką, jaka jest  -->