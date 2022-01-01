import { SET_LOADING } from '@/constants';

const commonModule = {
  state: {
    isLoading: false,
  },
  mutations: {
    [SET_LOADING]: (state, isLoading) => {
      state.isLoading = isLoading;
    },
  },
  getters: {
    getIsLoading: (state) => state.isLoading,
  },
};

export default commonModule;
