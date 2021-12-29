<template>
  <v-card class="ma-2" min-width="350" max-width="350">
    <v-img
      height="250"
      class="white--text align-end"
      transition="src"
      :src="urlToImage"
    >
    </v-img>
    <v-card-actions class="d-flex justify-end">
      <v-btn color="lighten-2" text class="justify-end" :href="url" target="_blank">See more</v-btn>
    </v-card-actions>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle
      ><v-chip class="mt-2">{{ source }}</v-chip></v-card-subtitle
    >
    <v-card-text>
      <p>{{ author || "-" }}</p>

      <div>
        {{ content }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'newsCard',
  props: {
    urlToImage: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    source: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
</style>
