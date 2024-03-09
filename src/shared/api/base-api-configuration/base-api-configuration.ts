import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';

export default class BaseApiConfiguration {
  protected readonly webApi: AxiosInstance;

  constructor(config?: CreateAxiosDefaults) {
    this.webApi = axios.create(config);
  }
}
