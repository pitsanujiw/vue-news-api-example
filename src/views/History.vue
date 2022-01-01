<template>
  <v-container>
    <div
      class="d-flex align-center mx-auto justify-center"
      style="height: calc(100vh - 125px)"
      v-if="!getHistories.length"
    >
      <div>
        <div class="mr-10 ml-10 d-flex justify-center text-h7 text-center">
          Opps! Your histories is empty.
        </div>
      </div>
    </div>
    <div v-else>
      <div class="text-h6 mb-5 mt-md-2">HISTORY</div>
      <history-table />
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

import HistoryTable from '@/components/HistoryTable.vue';

export default {
  name: 'History',
  data: () => ({}),
  components: { HistoryTable },
  computed: {
    ...mapGetters(['getHistories']),
  },
};
</script>

<style>
</style>
