import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

import ErrorMessage from '../../src/components/ErrorMessage.vue';

const vuetify = new Vuetify();
const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuetify);

describe('ErrorMessage', () => {
  let store;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Renders ErrorMessage Component', () => {
    const wrapper = shallowMount(ErrorMessage, { store, localVue, vuetify });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
