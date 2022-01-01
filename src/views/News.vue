<template>
  <v-container>
    <error-message v-if="getIsError" />
    <div v-else>
      <div class="text-h6 mb-5 mt-md-2">TOP HIGHLIGHT</div>
      <skeleton-loader v-if="getIsLoading" />
      <v-layout
        row
        v-else
        class="
          d-flex
          justify-center
          justify-sm-center
          justify-md-center
          justify-lg-start
          justify-xl-start
        "
      >
        <div
          v-for="(article, key) in getTopHighLights"
          :key="key"
          class="d-flex justify-center"
        >
          <news-card :newsArticle="article" />
        </div>
      </v-layout>
      <v-card v-intersect="infiniteScrolling" />
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import NewsCard from '@/components/NewsCard.vue';
import SkeletonLoader from '@/components/SkeletonLoader.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';

export default {
  name: 'News',
  components: {
    SkeletonLoader,
    NewsCard,
    ErrorMessage,
  },
  async created() {
    await this.newSources();
  },
  methods: {
    ...mapActions(['newsTopHighlight', 'newSources', 'getTopHighLightsError']),
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
      'getIsLoading',
    ]),
  },
};
</script>
