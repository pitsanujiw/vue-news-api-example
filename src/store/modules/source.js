import { get } from 'lodash';

import { ServiceInstance } from '@/utils';
import { SET_SOURCES } from '@/constants';

const service = new ServiceInstance();

const sourceModule = {
  state: {
    newsSources: [],
  },
  mutations: {
    [SET_SOURCES]: (state, newSource) => {
      state.newsSources = get(newSource, 'sources') || [];
    },
  },
  getters: {
    getNewsSources: (state) => state.newsSources,
  },
  actions: {
    newSources: async ({ commit, state }) => {
      // call api and then commit data to store source module
      try {
        const { data: newSource } = await service.getNewsSources();
        commit(SET_SOURCES, newSource);
      } catch (err) {
        state.isError = true;
      }
    },
  },
};

export default sourceModule;
