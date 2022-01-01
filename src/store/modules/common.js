import { SET_LOADING } from '@/constants';

const commonModule = {
  state: {
    isLoading: false, // tricker loading screen
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
