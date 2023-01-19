import { quotes } from "./methods";
import axios, { AxiosInstance } from "axios";
import { ConfigOptions, MoviesResponse, QuotesResponse } from "./types";

// export { lotr };

export interface InstanceConfigOptions {
  apiToken?: string;
  requestTimeout?: number;
}
export class LOTR {
  public movies: LOTRMovies;
  public quotes: LOTRQuotes;

  constructor({ apiToken, requestTimeout }: InstanceConfigOptions) {
    const api = axios.create({
      baseURL: "https://the-one-api.dev/v2/movie",
      timeout: requestTimeout || 5000,
      headers: { Authorization: `Bearer ${apiToken}` },
    });
    this.movies = new LOTRMovies(api);
    this.quotes = new LOTRQuotes(api);
  }
}

export class APIRoute {
  protected api: AxiosInstance;
  constructor(api: AxiosInstance) {
    this.api = api;
  }
}

export class LOTRMovies extends APIRoute {
  constructor(api: AxiosInstance){
    super(api);
  }

  async getAll(config: ConfigOptions = {}) {
    const result = await this.api.get("/", {
      params: { ...config },
    });
    return result.data as MoviesResponse;
  }
  
  async getOne(id: string, config: ConfigOptions = {}) {
    const result = await this.api.get(`/${id}`, {
      params: { ...config },
    });
    return result.data as MoviesResponse;
  }
}

export class LOTRQuotes extends APIRoute {
  constructor(api: AxiosInstance){
    super(api);
  }

  async getQuotesFromMovie(id: string, config: ConfigOptions = {}) {
    const requestString = `/${id}/quote`;
    const result = await this.api.get(`/${id}/quote`, {
      params: {
        ...config,
      },
    });
    return result.data as QuotesResponse;
  }
}