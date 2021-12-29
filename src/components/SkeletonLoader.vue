<template>
      <v-layout row class="pa-3 justify-start">
      <v-skeleton-loader
        v-for="n in 3"
        :key="n"
        class="mx-auto"
        type="card, article"
        min-width="350"
      ></v-skeleton-loader>
    </v-layout>
</template>

<script>
export default {
  name: 'SkeletonLoader',
};
</script>

<style>

</style>
