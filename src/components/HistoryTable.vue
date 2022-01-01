<template>
  <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <td>Title</td>
          <td>Source</td>
          <td>Autdor</td>
          <td>Visitor dates</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in getHistories" :key="key">
          <td>{{ item.history.title }}</td>
          <td>{{ item.history.source.name }}</td>
          <td>{{ item.history.author || '-' }}</td>
          <td>{{ onChangeFormatDate(item.date) }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapGetters } from 'vuex';

import { onChangeFormatDate } from '@/utils';

export default {
  name: 'HistoryTable',
  data: () => ({}),
  methods: {
    onChangeFormatDate,
  },
  computed: {
    ...mapGetters(['getHistories']),
  },
};
</script>

<style>
</style>
