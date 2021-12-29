<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="text-h5">Manatal News</div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
