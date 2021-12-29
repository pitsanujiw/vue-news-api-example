<template>
  <div
    class="d-flex align-center mx-auto justify-center"
    style="height: calc(100vh - 125px)"
  >
    <div>
      <div class="mr-10 ml-10 d-flex justify-center text-h7 text-center">
        Opps! The page may be broken, or the page may have been error.
      </div>
      <div class="mr-10 ml-10 d-flex justify-center text-h7 text-center">
        Check to see if the page you're trying to reload again.
      </div>
      <div class="d-flex mt-10 justify-center">
        <v-btn color="primary" @click="resetAndFetch">Reload</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

import { RESET_STATE } from '@/constants';

export default {
  name: 'ErrorMessage',
  methods: {
    ...mapMutations({
      resetState: RESET_STATE,
    }),
    ...mapActions(['newsTopHighlight']),
    async resetAndFetch() {
      this.resetState();
      await this.newsTopHighlight();
    },
  },
};
</script>

<style>
</style>
