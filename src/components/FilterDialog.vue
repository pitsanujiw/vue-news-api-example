<template>
  <div class="d-flex justify-end">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark v-bind="attrs" v-on="on" icon> <v-icon>mdi-magnify</v-icon></v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5">
          Search news top highlight
        </v-card-title>

        <v-card-text>
          <v-text-field
            label="Search news"
            placeholder="Search"
            :value="getSearch"
            @change="setSearch"
          ></v-text-field>
          <v-autocomplete
            :items="getNewsSources"
            color="white"
            item-text="name"
            label="sources"
            item-value="id"
            @change="setSource"
            :value="getSources"
            clearable
          ></v-autocomplete>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn depressed @click="onClose()">CLOSE</v-btn>
          <v-spacer></v-spacer>
          <v-btn dark @click="onFilter()">SEARCH</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

import { SET_QUERY, SET_SOURCES_FILTER } from '@/constants';

export default {
  name: 'FilterDialog',
  data: () => ({
    dialog: false,
  }),
  watch: {},
  methods: {
    ...mapMutations({
      setQuery: SET_QUERY,
      setSourcesText: SET_SOURCES_FILTER,
    }), // map mutation setQuery for search highlight news
    ...mapActions(['newsTopHighlight']), // map action for apply query
    setSearch(text) {
      this.setQuery(text);
    },
    onClose() {
      this.dialog = false;
    },
    setSource(source) {
      this.setSourcesText(source);
    },
    async onFilter() {
      this.dialog = false;
      await this.newsTopHighlight(true);
    },
  },
  computed: {
    ...mapGetters(['getSearch', 'getNewsSources', 'getSources']),
  },
};
</script>

<style>
</style>
