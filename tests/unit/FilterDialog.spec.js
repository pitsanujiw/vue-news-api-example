import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import FilterDialog from '../../src/components/FilterDialog.vue';

const vuetify = new Vuetify();
const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuetify);

describe('FilterDialog', () => {
  const modules = {
    getters: { getNewsSources: jest.fn(), geSources: jest.fn(), getSearch: jest.fn() },
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

  it('Renders FilterDialog Component', () => {
    const wrapper = shallowMount(FilterDialog, { store, localVue, vuetify });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
