import { get } from 'lodash';

import { ServiceInstance, filterTopHighLight } from '@/utils';
import {
  SET_TOP_HIGHLIGHT,
  SET_SOURCES_FILTER,
  SET_QUERY,
  RESET_STATE,
  SET_LOADING,
} from '@/constants';

const DEFAULT_PAGE = 0;
const DEFAULT_PAGE_SIZE = 10;
const service = new ServiceInstance();

const newsModule = {
  state: {
    topHighLights: [],
    search: '',
    country: 'us',
    sources: '',
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
    isInfinite: false,
    isError: false,
  },
  mutations: {
    [SET_TOP_HIGHLIGHT]: (state, { topHighlights, isSearch }) => {
      const articles = filterTopHighLight(get(topHighlights, 'articles'));

      if (isSearch) {
        state.topHighLights = articles;
      } else {
        state.topHighLights = [...state.topHighLights, ...articles].filter(Boolean);
      }

      const topHighLightSize = get(state, 'topHighLights.length') || 0;
      const total = get(topHighlights, 'totalResults') || 0;
      if (topHighLightSize >= total) {
        state.isInfinite = true;
      }
    },
    [SET_SOURCES_FILTER]: (state, sources) => {
      state.sources = sources;
      state.page = DEFAULT_PAGE;
      state.isInfinite = false;
    },
    [SET_QUERY]: (state, search) => {
      state.search = search;
      state.page = DEFAULT_PAGE;
      state.isInfinite = false;
    },
    [RESET_STATE]: (state) => {
      state.isInfinite = false;
      state.isError = false;
    },
  },
  getters: {
    getTopHighLights: (state) => state.topHighLights,
    getSearch: (state) => state.search,
    getSources: (state) => state.sources,
    getIsError: (state) => state.isError,
  },
  actions: {
    newsTopHighlight: async ({ commit, state }, isSearch = false) => {
      try {
        if (state.isInfinite) {
          return;
        }

        state.page += 1;

        if (!state.topHighLights.length || isSearch) {
          commit(SET_LOADING, true);
          state.page = DEFAULT_PAGE;
          state.pageSize = DEFAULT_PAGE_SIZE;
        }

        const { data: topHighlights } = await service.getTopHighlight({
          q: state.search,
          page: state.page,
          pageSize: state.pageSize,
          ...(state.sources ? { sources: state.sources } : { country: state.country }),
        });

        if (!state.topHighLights.length || isSearch) {
          commit(SET_LOADING, false);
        }

        commit(SET_TOP_HIGHLIGHT, { topHighlights, isSearch });
      } catch (err) {
        state.isInfinite = true;
        state.isError = true;
        commit(SET_LOADING, false);
      }
    },
    getTopHighLightsError: async ({ commit, state }) => {
      try {
        commit(SET_LOADING, true);
        await service.getTopHighlightError();
      } catch (err) {
        state.isInfinite = true;
        state.isError = true;
        commit(SET_LOADING, false);
      }
    },
  },
};

export default newsModule;
