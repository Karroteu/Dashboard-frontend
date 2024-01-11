<script setup>
import customButton from '../components/Button.vue'
import category from '../components/LeftPadCategory.vue'
</script>

<template>
    <div class="left-pad">
        <search-bar label="Search" />
        <h3 class="left-pad__section-labels">Main</h3>
        <category icon="book">Contracts</category>
        <category icon="" active>Analytics</category>
        <category>Settings</category>
        <h3 class="left-pad__section-labels">Inboxes</h3>
        <h3 class="left-pad__section-labels">Team</h3>
        <custom-button>Dianne Russell</custom-button>
        <custom-button>Kristin Watson</custom-button>
        <custom-button>Albert Flores</custom-button>
    </div>
</template>

<style lang="scss" scoped>
@import '../src/assets/variables';

.left-pad {
    display: flex;
    flex-direction: column;
    width: calc($side-panel-width - 1px);
    border: solid 1px $border-color;
    border-top: none;
    padding: 0;
    height: calc(100vh - 5rem);

    > * {
        margin: 0 1rem;
    }

    .left-pad__section-labels {
        text-transform: uppercase;
        color: $font-dark-color;
        font-size: 1rem;
        font-weight: 500;
    }
}
</style>