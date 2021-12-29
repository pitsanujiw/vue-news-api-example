import Vue from 'vue';
import Vuex from 'vuex';

import { newsModule } from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    newsModule,
  },
});
