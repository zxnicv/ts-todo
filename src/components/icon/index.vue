<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: ['name'],
    computed: {
        iconName(): string {
            return `#icon-${this.name}`;
        },
    },
});
</script>


