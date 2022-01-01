/* eslint-disable import/named */
import Vue from 'vue';
import Vuex from 'vuex';

import {
  commonModule, historyModule, newsModule, sourceModule,
} from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    commonModule,
    historyModule,
    newsModule,
    sourceModule,
  },
});
