<template>
  <v-app-bar app class="elevation-0" dark>
    <div class="text-h5" v-on:click="redirectHome">Manatal News</div>
    <v-spacer></v-spacer>

    <filter-dialog />
    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item to="/">
          <v-list-item-title>News</v-list-item-title>
        </v-list-item>
        <v-list-item to="/history">
          <v-list-item-title>History</v-list-item-title>
        </v-list-item>
        <v-list-item @click="setError">
          <v-list-item-title>Try Error Message</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';

import FilterDialog from '@/components/FilterDialog.vue';

export default {
  name: 'AppBarManatal',
  components: {
    FilterDialog,
  },
  methods: {
    ...mapActions(['getTopHighLightsError']),
    async setError() {
      await this.getTopHighLightsError(); // for try error page
    },
    redirectHome() {
      this.$router.push('/'); // push router to home page is News page
    },
  },
};
</script>

<style>
</style>
