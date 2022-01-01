import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import HistoryTable from '../../src/components/HistoryTable.vue';

const vuetify = new Vuetify();
const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuetify);

describe('NewsCard', () => {
  const modules = {
    getters: {},
  };
  let store;

  beforeEach(() => {
    jest.clearAllMocks();
    store = new Vuex.Store({
      modules: {
        newModules: modules,
      },
    });
  });

  it('Renders HistoryTable Component', () => {
    const wrapper = shallowMount(HistoryTable, {
      store,
      localVue,
      vuetify,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
