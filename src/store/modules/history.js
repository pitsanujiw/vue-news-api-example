import { ADD_HISTORY } from '@/constants';

const historyModule = {
  state: {
    histories: [],
  },
  getters: {
    getHistories: (state) => state.histories,
  },
  mutations: {
    [ADD_HISTORY]: (state, history) => {
      state.histories = [...state.histories, history].filter(Boolean);
    },
  },
  actions: {
    addHistory({ commit }, history) {
      commit(ADD_HISTORY, { history, date: new Date() });
    },
  },
};

export default historyModule;
