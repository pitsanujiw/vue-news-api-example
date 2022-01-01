<template>
  <v-card class="ma-2" min-width="350" max-width="350">
    <v-img
      height="250"
      class="white--text align-end"
      transition="src"
      :src="newsArticle.urlToImage"
    >
    </v-img>
    <v-card-actions class="d-flex justify-end">
      <news-detail :newsArticle="newsArticle" />
    </v-card-actions>
    <v-card-title>{{ newsArticle.title }}</v-card-title>
    <v-card-subtitle
      ><v-chip class="mt-2">{{
        newsArticle.source.name
      }}</v-chip></v-card-subtitle
    >
    <v-card-text>
      <p>{{ newsArticle.author || "-" }}</p>
      <v-divider></v-divider>

      <div>
        {{ newsArticle.description || '-' }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import newsDetail from './NewsDetail.vue';

export default {
  name: 'newsCard',
  props: {
    newsArticle: {
      type: Object,
    },
  },
  data: () => ({
    news: undefined,
  }),
  methods: {
  },
  components: {
    newsDetail,
  },
};
</script>

<style>
</style>
