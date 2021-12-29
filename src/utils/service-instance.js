import axios from 'axios';

import { API_URL, API_KEY } from '@/config';

const API_ROOT = API_URL;
const TIMEOUT = 60000;
const HEADERS = {
  'Content-Type': 'application/json',
};

const PARAMS = {
  apiKey: API_KEY,
};

export default class ServiceInstance {
  constructor() {
    this.instance = axios.create({
      baseURL: API_ROOT,
      timeout: TIMEOUT,
      headers: HEADERS,
      params: PARAMS,
    });

    this.instance.interceptors.request.use(this.handleRequest);

    this.instance.interceptors.response.use(this.handleResponse);
  }

  handleRequest = (config) => config;

  handleResponse = (response) => response;

  getTopHighlight = (params) => this.instance.get('/top-headlines', {
    params,
  });

  getNewsSources = () => this.instance.get('/sources');

  getTopHighlightError = () => this.instance.get('/sources?apiKey');
}
