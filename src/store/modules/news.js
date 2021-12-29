import { get } from 'lodash';

import { ServiceInstance, filterTopHighLight } from '@/utils';
import {
  SET_TOP_HIGHLIGHT,
  SET_TOP_HIGHLIGHT_LOADING,
  SET_SOURCES_FILTER,
  SET_QUERY,
  SET_SOURCES,
  RESET_STATE,
} from '@/constants';

const DEFAULT_PAGE = 0;
const DEFAULT_PAGE_SIZE = 10;
const service = new ServiceInstance();

const newsModule = {
  state: {
    topHighLights: [],
    newsSources: [],
    search: '',
    isLoading: false,
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
    [SET_SOURCES]: (state, newSource) => {
      state.newsSources = get(newSource, 'sources') || [];
    },
    [SET_TOP_HIGHLIGHT_LOADING]: (state, isLoading) => {
      state.isLoading = isLoading;
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
    getNewsSources: (state) => state.newsSources,
    getSearch: (state) => state.search,
    getSources: (state) => state.sources,
    getIsTopHighlightLoading: (state) => state.isLoading,
    getIsError: (state) => state.isError,
  },
  actions: {
    setTopHighlightLoading: ({ commit }, isLoading) => {
      commit(SET_TOP_HIGHLIGHT_LOADING, isLoading);
    },
    newSources: async ({ commit, state }) => {
      try {
        const { data: newSource } = await service.getNewsSources();
        commit(SET_SOURCES, newSource);
      } catch (err) {
        state.isError = true;
      }
    },
    newsTopHighlight: async ({ commit, state }, isSearch = false) => {
      try {
        if (state.isInfinite) {
          return;
        }

        state.page += 1;

        if (!state.topHighLights.length || isSearch) {
          state.isLoading = true;
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
          state.isLoading = false;
        }

        commit(SET_TOP_HIGHLIGHT, { topHighlights, isSearch });
      } catch (err) {
        state.isInfinite = true;
        state.isError = true;
        commit(SET_TOP_HIGHLIGHT_LOADING, false);
      }
    },
    getTopHighLightsError: async ({ commit, state }) => {
      try {
        state.isLoading = true;
        await service.getTopHighlightError();
      } catch (err) {
        state.isInfinite = true;
        state.isError = true;
        commit(SET_TOP_HIGHLIGHT_LOADING, false);
      }
    },
  },
};

export default newsModule;
