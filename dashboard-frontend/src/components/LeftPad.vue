<script setup>
// import customButton from '../components/Button.vue'
import category from '../components/LeftPadCategory.vue'
import userListing from '../components/UserListing.vue'
import inbox from '../components/Inbox.vue'
</script>

<template>
    <div class="left-pad">
        <search-bar label="Search" />
        <h3 class="left-pad__section-labels">Main</h3>
        <div class="left-pad__section__categories">
            <category icon="book">Contracts</category>
            <category icon="chart" active>Analytics</category>
            <category icon="gear" >Settings</category>
        </div>
        <h3 class="left-pad__section-labels">Inboxes</h3>
        <div class="left-pad__section__inboxes">
            <inbox label="Clients" number="(+48) 800 800 800" />
            <inbox label="Personal" number="(+48) 780 600 300" />
        </div>
        <h3 class="left-pad__section-labels">Team</h3>
        <div class="left-pad__section__team">
            <user-listing is-you>Dianne Russell</user-listing>
            <user-listing>Kristin Watson</user-listing>
            <user-listing>Albert Flores</user-listing>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../src/assets/variables';

.left-pad {
    display: flex;
    flex-direction: column;
    width: calc($side-panel-width);
    border: solid 1px $border-color;
    border-top: none;
    padding: 0;
    height: calc(100vh - 5rem);
    overflow-y: auto;

    > * {
        margin: 0 1rem;
    }

    .left-pad__section-labels {
        text-transform: uppercase;
        color: $font-dark-color;
        font-size: 1rem;
        font-weight: 500;
        cursor: default;
        margin: 0.75rem 1rem;
    }

    .left-pad__section__categories {
        margin: 0.5rem 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .left-pad__section__inboxes {
        margin: 0.5rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .left-pad__section__team {
        margin-top: 0.5rem;
    }
}
</style>