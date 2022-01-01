import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import NewsDetail from '../../src/components/NewsDetail.vue';

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

  it('Renders NewsDetail Component', () => {
    const wrapper = shallowMount(NewsDetail, {
      store,
      localVue,
      vuetify,
      propsData: {
        newsArticle: {
          urlToImage: '__URL__',
          title: '__TITLE__',
          author: '__AUTHOR__',
          description: '__DESCRIPTION__',
          name: '__NAME__',
          source: {
            name: '__SOURCE_NAME__',
          },
        },
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
