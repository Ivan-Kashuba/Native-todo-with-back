import axios from 'axios';
import { API__VERSION, SERVER__URL } from '../constants/constants';

export default class HttpService {
  baseUrl: string;
  fetchingService: any;
  apiVersion: string;
  constructor(baseUrl = SERVER__URL, apiVersion = API__VERSION) {
    this.baseUrl = baseUrl;
    this.fetchingService = axios;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private addTokenToConfig() {
    return {
      Authorization: localStorage.getItem('token'),
    };
  }

  get(config: any, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = { ...config.headers, ...this.addTokenToConfig() };
    }
    return this.fetchingService.get(
        this.getFullApiUrl((config.url)),
        { headers: { ...config.headers } },
    );
  }

  post(config: any, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = { ...config.headers, ...this.addTokenToConfig() };
    }
    return this.fetchingService.post(
        this.getFullApiUrl(config.url),
        config.data,
        { headers: { ...config.headers } },
    );
  }

  put(config: any, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = { ...config.headers, ...this.addTokenToConfig() };
    }
    return this.fetchingService.put(
        this.getFullApiUrl(config.url),
        config.data,
        { headers: { ...config.headers } },
    );
  }

  delete(config: any, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = { ...config.headers, ...this.addTokenToConfig() };
    }
    return this.fetchingService.delete(this.getFullApiUrl(config.url), {
      headers: { ...config.headers },
    });
  }
}
