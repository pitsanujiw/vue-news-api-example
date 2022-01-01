<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="800">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on" @click="onOpenDialog">
          See more
        </v-btn>
      </template>

      <v-card class="mx-auto">
        <v-img
          class="white--text align-end"
          height="200px"
          :src="newsArticle.urlToImage"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        >
          <v-card-title>{{ newsArticle.title }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0 mt-5">{{
          onChangeFormatDate(newsArticle.publishedAt)
        }}</v-card-subtitle>
        <v-card-subtitle
          ><v-chip class="mt-2">{{
            newsArticle.source.name
          }}</v-chip></v-card-subtitle
        >

        <v-card-text class="text--primary">
          <div class="mb-2">{{ newsArticle.author || "-" }}</div>
          <v-divider></v-divider>
          <div class="mt-2">{{ newsArticle.content }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="dark" text :href="newsArticle.url" target="_blank">
            Explore
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import { onChangeFormatDate } from '@/utils';

export default {
  name: 'NewsDetail',
  props: {
    newsArticle: {
      type: Object,
    },
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    ...mapActions(['addHistory']),
    onOpenDialog() {
      this.addHistory(this.newsArticle);
    },
    onChangeFormatDate,
  },
  computed: {},
};
</script>

<style>
</style>
