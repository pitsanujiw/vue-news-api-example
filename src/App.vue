<template>
  <v-app>
    <v-main>
      <app-bar-manatal />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBarManatal from './components/AppBarManatal.vue';

export default {
  name: 'App',
  components: {
    AppBarManatal,
  },
};
</script>
