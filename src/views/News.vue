<template>
  <v-container>
    <filter-dialog />
    <v-btn @click="setError">TRY ERROR</v-btn>
    <error-message v-if="getIsError" />
    <div v-else>
      <div class="text-h6 mb-5 mt-md-2">TOP HIGHLIGHT</div>
      <skeleton-loader v-if="getIsTopHighlightLoading" />
      <v-layout
        row
        v-else
        class="
          d-flex
          justify-center
          justify-sm-start
          justify-md-start
          justify-lg-start
          justify-xl-start
        "
      >
        <div
          v-for="(article, key) in getTopHighLights"
          :key="key"
          class="d-flex justify-center"
        >
          <news-card
            :author="article.author"
            :content="article.content"
            :title="article.title"
            :urlToImage="article.urlToImage"
            :source="article.source.name"
            :url="article.url"
          />
        </div>
      </v-layout>
      <v-card v-intersect="infiniteScrolling" />
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import FilterDialog from '@/components/FilterDialog.vue';
import NewsCard from '@/components/NewsCard.vue';
import SkeletonLoader from '@/components/SkeletonLoader.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';

export default {
  name: 'News',
  components: {
    SkeletonLoader,
    NewsCard,
    ErrorMessage,
    FilterDialog,
  },
  async created() {
    await this.newSources();
  },
  methods: {
    ...mapActions(['newsTopHighlight', 'newSources', 'getTopHighLightsError']),
    async setError() {
      await this.getTopHighLightsError();
    },
    async infiniteScrolling(_entries, _observer, isIntersecting) {
      if (!isIntersecting) {
        return;
      }

      setTimeout(async () => {
        await this.newsTopHighlight();
      }, 500);
    },
  },
  computed: {
    ...mapGetters([
      'getTopHighLights',
      'getSources',
      'getSearch',
      'getIsError',
      'getIsTopHighlightLoading',
    ]),
  },
};
</script>
