import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import NewsCard from '../../src/components/NewsCard.vue';

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

  it('Renders NewsCard Component', () => {
    const wrapper = shallowMount(NewsCard, { store, localVue, vuetify });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
